export const isString = (text: string): boolean => {
  return typeof text === 'string'
}

export const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

export const isNumber = (text: number): boolean => {
  return typeof text === 'number' && !isNaN(text)
}
