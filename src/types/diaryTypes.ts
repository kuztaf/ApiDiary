import { DiaryEntryModel } from '../models/diaryEntryModel'

export enum WeatherEnum {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy'
}

export enum VisibilityEnum {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

export type NonSensitiveDiaryEntry = Omit<
  DiaryEntryModel,
  'comment' | 'createdAt' | 'updatedAt'
>
export type NewDiaryEntry = Omit<
  DiaryEntryModel,
  'id' | 'createdAt' | 'updatedAt'
>
