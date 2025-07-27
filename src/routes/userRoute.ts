import { Request, Response } from 'express'
import { BaseRoute } from './baseRoute'
import * as UserServices from '../services/userServices'
import { NewUserEntry } from '../types/userTypes'
import toNewUserEntry from '../utils/userUtils'

export class UserRoute extends BaseRoute {
  constructor() {
    super('/api/users') // Define el path base aquí
  }

  protected getAll(_req: Request, res: Response): void {
    const users = UserServices.getDataWithoutSensitiveInfo()
    res.send(users)
  }

  protected getById(req: Request, res: Response): void {
    const user = UserServices.findById(Number(req.params.id))
    if (user != null) {
      res.send(user)
    } else {
      res.status(404).send('User entry not found')
    }
  }

  protected create(req: Request, res: Response): void {
    try {
      const newUserEntry: NewUserEntry = toNewUserEntry(req.body)
      const newEntry = UserServices.addUser(newUserEntry)
      res.status(201).json(newEntry)
    } catch (error) {
      res.status(400).send((error as Error).message)
    }
  }

  protected update(req: Request, res: Response): void {
    const id = Number(req.params.id)
    const updatedData: Partial<NewUserEntry> = req.body
    const updatedEntry = UserServices.updateUser(id, updatedData)
    if (updatedEntry != null) {
      res.json(updatedEntry)
    } else {
      res.status(404).send('User entry not found')
    }
  }

  protected remove(req: Request, res: Response): void {
    const id = Number(req.params.id)
    const wasDeleted = UserServices.deleteUser(id)
    if (wasDeleted) {
      res.status(204).send()
    } else {
      res.status(404).send('User entry not found')
    }
  }
}
