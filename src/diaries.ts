import express from 'express'
import * as diaryServices from './services/diaryServices'
import { NewDiaryEntry } from './types/diaryTypes'
import toNewDiaryEntry from './utils/diaryUtils'

const router = express.Router()

router.get('/', (_req, res) => {
  const diaries = diaryServices.getEntriesWithoutSensitiveInfo()
  res.send(diaries)
})

router.post('/', (req, res) => {
  const params = req.body // Assuming the body contains the new diary entry data

  const newDiaryEntry: NewDiaryEntry = toNewDiaryEntry(params)

  const newEntry = diaryServices.addEntry(newDiaryEntry)
  res.json(newEntry)
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id))
  if (diary != null) {
    res.send(diary)
  } else {
    res.status(404).send('Diary entry not found')
  }
})

export default router
