import { Request, Response } from 'express'
import { BaseRoute } from './baseRoute'
import * as diaryServices from '../services/diaryServices'
import { NewDiaryEntry } from '../types/diaryTypes'
import toNewDiaryEntry from '../utils/diaryUtils'

export class DiaryRoute extends BaseRoute {
  constructor() {
    super('/api/diaries') // Define el path base aquí
  }

  protected getAll(_req: Request, res: Response): void {
    const diaries = diaryServices.getEntriesWithoutSensitiveInfo()
    res.send(diaries)
  }

  protected getById(req: Request, res: Response): void {
    const diary = diaryServices.findById(Number(req.params.id))
    if (diary != null) {
      res.send(diary)
    } else {
      res.status(404).send('Diary entry not found')
    }
  }

  protected create(req: Request, res: Response): void {
    try {
      const newDiaryEntry: NewDiaryEntry = toNewDiaryEntry(req.body)
      const newEntry = diaryServices.addEntry(newDiaryEntry)
      res.status(201).json(newEntry)
    } catch (error) {
      res.status(400).send((error as Error).message)
    }
  }

  protected update(req: Request, res: Response): void {
    const id = Number(req.params.id)
    const updatedData: Partial<NewDiaryEntry> = req.body
    const updatedEntry = diaryServices.updateEntry(id, updatedData)
    if (updatedEntry != null) {
      res.json(updatedEntry)
    } else {
      res.status(404).send('Diary entry not found')
    }
  }

  protected remove(req: Request, res: Response): void {
    const id = Number(req.params.id)
    const wasDeleted = diaryServices.deleteEntry(id)
    if (wasDeleted) {
      res.status(204).send()
    } else {
      res.status(404).send('Diary entry not found')
    }
  }
}
