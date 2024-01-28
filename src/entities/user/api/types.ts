export type UserDto = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type User = Omit<UserDto, 'created' | 'updated'>

export type UpdateUserRequest = {
  avatar?: FormData
  name?: string
}
