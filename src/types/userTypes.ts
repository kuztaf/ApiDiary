import { UserModel } from '../models/userModel'

export enum RoleEnum {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest'
}

export type NonSensitiveUserEntry = Omit<
  UserModel,
  'id' | 'email' | 'createdAt' | 'updatedAt'
>
export type NewUserEntry = Omit<UserModel, 'id' | 'createdAt' | 'updatedAt'>
export type UserEntry = Omit<UserModel, 'createdAt' | 'updatedAt'>
