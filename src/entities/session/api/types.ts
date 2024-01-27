export type RequestLoginBody = {
  email: string
  password: string
  rememberMe: boolean
}

export type ResponseLoginBody = {
  accessToken: string
}
