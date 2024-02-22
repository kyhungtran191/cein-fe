import axios, { type AxiosInstance } from 'axios'
import { saveAccessTokenToLS, saveRefreshTokenToLS, saveUserToLS, getAccessTokenFromLS } from './auth'
import { AuthData } from 'src/@types/auth'

class Http {
  instance: AxiosInstance
  private access_token
  constructor() {
    this.access_token = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: 'http://localhost:5050/api/v1',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (config.headers && this.access_token) {
          config.headers.Authorization = `Bearer ${this.access_token}`
          return config
        }
        return config
      },
      function (error) {
        // Do something with request error
        console.log(error)
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        if (response.config.url == '/auth/login' || response.config.url == '/auth/signup') {
          const data = response.data as AuthData
          saveAccessTokenToLS(data.data.access_token)
          saveRefreshTokenToLS(data.data.refresh_token)
          saveUserToLS(data.data.user)
        }
        return response
      },
      async (error) => {}
    )
  }
}
const http = new Http().instance
export default http
