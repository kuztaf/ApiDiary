import diaryData from '../data/diaries.json'
import {
  DiaryEntry,
  NonSensistiveDiaryEntry,
  NewDiaryEntry
} from '../types/diaryTypes'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensistiveDiaryEntry | undefined => {
  const entry = diaries.find((diary) => diary.id === id)
  if (entry == null) return undefined
  const { comment, ...restOfEntry } = entry
  return restOfEntry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensistiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addEntry = (NewDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newEntry: DiaryEntry = {
    ...NewDiaryEntry,
    id: diaries.length + 1 // Simple ID generation, could be improved
  }
  diaries.push(newEntry)
  return newEntry
}
