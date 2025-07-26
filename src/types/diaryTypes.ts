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

export interface DiaryEntry {
  id: number
  date: string
  weather: WeatherEnum
  visibility: VisibilityEnum
  comment: string
}

export type NonSensistiveDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
