import diaryData from '../data/diaries.json'
import { NonSensitiveDiaryEntry, NewDiaryEntry } from '../types/diaryTypes'
import { DiaryEntryModel } from '../models/diaryEntryModel'

const diaries: DiaryEntryModel[] = diaryData as DiaryEntryModel[]

export const getEntries = (): DiaryEntryModel[] => diaries

export const findById = (id: number): NonSensitiveDiaryEntry | undefined => {
  const entry = diaries.find((diary) => diary.id === id)
  if (entry == null) return undefined
  const { comment, ...restOfEntry } = entry
  return restOfEntry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addEntry = (NewDiaryEntry: NewDiaryEntry): DiaryEntryModel => {
  const newEntry: DiaryEntryModel = {
    ...NewDiaryEntry,
    id: diaries.length + 1 // Simple ID generation, could be improved
  }
  diaries.push(newEntry)
  return newEntry
}

export const updateEntry = (
  id: number,
  updatedData: Partial<NewDiaryEntry>
): DiaryEntryModel | undefined => {
  const entryIndex = diaries.findIndex((diary) => diary.id === id)
  if (entryIndex === -1) return undefined
  diaries[entryIndex] = { ...diaries[entryIndex], ...updatedData }
  return diaries[entryIndex]
}
export const deleteEntry = (id: number): boolean => {
  const index = diaries.findIndex((entry) => entry.id === id)
  if (index !== -1) {
    diaries.splice(index, 1)
    return true
  }
  return false
}
