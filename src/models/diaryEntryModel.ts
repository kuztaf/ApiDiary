import { WeatherEnum, VisibilityEnum } from '../types/diaryTypes'
import { BaseModel } from './baseModel'

export interface DiaryEntryModel extends BaseModel {
  date: string
  weather: WeatherEnum
  visibility: VisibilityEnum
  comment: string
}
