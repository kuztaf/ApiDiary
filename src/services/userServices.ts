import usersData from '../data/users.json'
import { UserModel } from '../models/userModel'
import { NewUserEntry, NonSensitiveUserEntry } from '../types/userTypes'

const users: UserModel[] = usersData as UserModel[]
export const getDataWithoutSensitiveInfo = (): NonSensitiveUserEntry[] => {
  return users.map(({ name, lastName, age, username, role }) => {
    return {
      name,
      lastName,
      age,
      username,
      role
    }
  })
}

export const findById = (id: number): NonSensitiveUserEntry | undefined => {
  const user = users.find((user) => user.id === id)
  if (user == null) return undefined
  const { email, ...restOfUser } = user
  return restOfUser
}

export const addUser = (newUserEntry: NewUserEntry): UserModel => {
  const newUser: UserModel = {
    ...newUserEntry,
    id: users.length + 1 // Simple ID generation, could be improved
  }
  users.push(newUser)
  return newUser
}

export const updateUser = (
  id: number,
  updatedData: Partial<NewUserEntry>
): UserModel | undefined => {
  const entryIndex = users.findIndex((user) => user.id === id)
  if (entryIndex === -1) return undefined
  users[entryIndex] = { ...users[entryIndex], ...updatedData }
  return users[entryIndex]
}
export const deleteUser = (id: number): boolean => {
  const index = users.findIndex((entry) => entry.id === id)
  if (index !== -1) {
    users.splice(index, 1)
    return true
  }
  return false
}
