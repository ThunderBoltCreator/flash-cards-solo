import type { User, UserDto } from '../api/types'

export function mapUser(users: UserDto): User {
  return {
    avatar: users.avatar,
    email: users.email,
    id: users.id,
    isEmailVerified: users.isEmailVerified,
    name: users.name,
  }
}
