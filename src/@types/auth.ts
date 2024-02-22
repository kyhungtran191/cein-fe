export type User = {
  email: string
  fullName: string
  role: string
}

export type SignUpData = {
  name: string
  email: string
  password: string
  confirm_password: string
}

export type LoginData = Pick<SignUpData, 'password' | 'email'>

export type AuthData = {
  message: string
  data: {
    access_token: string
    refresh_token: string
    user: User
  }
}
