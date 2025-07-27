import { NewUserEntry, RoleEnum } from '../types/userTypes'
import { isNumber, isString } from './baseUtils'

const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('Invalid name')
  }
  return nameFromRequest
}

const parseLastName = (lastNameFromRequest: any): string => {
  if (!isString(lastNameFromRequest)) {
    throw new Error('Invalid last name')
  }
  return lastNameFromRequest
}

const isRole = (role: string): boolean => {
  return Object.values(RoleEnum).includes(role as RoleEnum)
}
const parseRole = (roleFromRequest: any): RoleEnum => {
  if (!isString(roleFromRequest) || !isRole(roleFromRequest)) {
    throw new Error('Invalid role')
  }
  return roleFromRequest as RoleEnum
}

const parseAge = (ageFromRequest: any): number => {
  if (!isNumber(ageFromRequest) || ageFromRequest < 0) {
    throw new Error('Invalid age')
  }
  return ageFromRequest
}

const parseUsername = (usernameFromRequest: any): string => {
  if (!isString(usernameFromRequest)) {
    throw new Error('Invalid username')
  }
  return usernameFromRequest
}

const parseEmail = (emailFromRequest: any): string => {
  if (!isString(emailFromRequest)) {
    throw new Error('Invalid email')
  }
  return emailFromRequest
}

const toNewUserEntry = (params: any): NewUserEntry => {
  return {
    name: parseName(params.name),
    lastName: parseLastName(params.lastName),
    age: parseAge(params.age),
    username: parseUsername(params.username),
    email: parseEmail(params.email),
    role: parseRole(params.role)
  }
}

export default toNewUserEntry
