import { NewDiaryEntry, WeatherEnum, VisibilityEnum } from '../types/diaryTypes'

const parseComment = (commentFromRequest: any): string => {
  if (
    commentFromRequest === null ||
    commentFromRequest === undefined ||
    !isString(commentFromRequest)
  ) {
    throw new Error('Invalid comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Invalid date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): WeatherEnum => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Invalid weather')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): VisibilityEnum => {
  if (
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error('Invalid visibility')
  }
  return visibilityFromRequest as VisibilityEnum
}

const isString = (text: string): boolean => {
  return typeof text === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (weather: string): boolean => {
  return Object.values(WeatherEnum).includes(weather as WeatherEnum)
}

const isVisibility = (visibilityFromRequest: any): boolean => {
  return Object.values(VisibilityEnum).includes(
    visibilityFromRequest as VisibilityEnum
  )
}

const toNewDiaryEntry = (params: any): NewDiaryEntry => {
  return {
    date: parseDate(params.date),
    weather: parseWeather(params.weather),
    visibility: parseVisibility(params.visibility),
    comment: parseComment(params.comment) // Comment is optional, can be omitted if not needed
  }
}

export default toNewDiaryEntry
