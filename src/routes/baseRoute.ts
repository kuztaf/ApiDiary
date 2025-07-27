// src/routes/BaseRoute.ts

import { Router, Request, Response } from 'express'

export abstract class BaseRoute {
  public readonly router: Router
  public readonly path: string

  constructor(path: string) {
    this.router = Router()
    this.path = path
    this.setupRoutes()
  }

  private setupRoutes(): void {
    this.router.get('/', this.getAll.bind(this))
    this.router.get('/:id', this.getById.bind(this))
    this.router.post('/', this.create.bind(this))
    this.router.put('/:id', this.update.bind(this))
    this.router.delete('/:id', this.remove.bind(this))
  }

  protected abstract getAll(req: Request, res: Response): void
  protected abstract getById(req: Request, res: Response): void
  protected abstract create(req: Request, res: Response): void
  protected abstract update(req: Request, res: Response): void
  protected abstract remove(req: Request, res: Response): void
}
