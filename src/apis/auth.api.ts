import { LoginData } from 'src/@types/auth'
import { SuccessResponse } from 'src/@types/utils'
import http from 'src/utils/axios'

const URL = '/auth'

export const loginApi = async (data: LoginData) => http.post<SuccessResponse<LoginData>>(`${URL}/login`, data)

export const signUpApi = `${URL}/signup`
