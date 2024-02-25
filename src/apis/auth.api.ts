import { AuthData, LoginData, SignUpData } from 'src/@types/auth'
import { SuccessResponse } from 'src/@types/utils'
import http from 'src/utils/axios'

const URL = '/auth'

export const loginApi = (data: LoginData) => http.post<SuccessResponse<AuthData>>(`${URL}/login`, data)

export const logOutApi = () => http.post<{ message: string }>(`${URL}/logout`)

export const signUpApi = (data: SignUpData) => http.post<SuccessResponse<AuthData>>(`${URL}/signup`, data)
