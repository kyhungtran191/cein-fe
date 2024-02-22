import { AuthData, LoginData } from 'src/@types/auth'
import { SuccessResponse } from 'src/@types/utils'
import http from 'src/utils/axios'

const URL = '/auth'

export const loginApi = async (data: LoginData) => http.post<SuccessResponse<AuthData>>(`${URL}/login`, data)

export const logOutApi = async () => http.post<{ message: string }>(`${URL}/logout`)

export const signUpApi = `${URL}/signup`
