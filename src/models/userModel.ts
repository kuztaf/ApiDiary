import { RoleEnum } from '../types/userTypes'
import { BaseModel } from './baseModel'

export interface UserModel extends BaseModel {
  name: string
  lastName: string
  age: number
  username: string
  email: string
  role: RoleEnum
}
