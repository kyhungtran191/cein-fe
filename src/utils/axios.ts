import axios, { InternalAxiosRequestConfig, type AxiosInstance } from 'axios'
import { saveAccessTokenToLS, saveRefreshTokenToLS, saveUserToLS, getAccessTokenFromLS, clearLS } from './auth'
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
        // Do something before request is sent
        console.log(this.access_token)
        if (this.access_token && config.headers) {
          config.headers.authorization = `Bearer ${this.access_token}`
          return config
        }
        return config
      },
      function (error) {
        console.log(error.response)
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        console.log(response.config.url)
        if (response.config.url === '/auth/login' || response.config.url === '/auth/signup') {
          const data = response.data as AuthData
          this.access_token = data.data.access_token
          saveAccessTokenToLS(data.data.access_token)
          saveRefreshTokenToLS(data.data.refresh_token)
          saveUserToLS(data.data.user)
        } else if (response.config.url === '/auth/logout') {
          this.access_token = ''
          clearLS()
        }
        return response
      },
      async (error) => {
        return Promise.reject(error)
      }
    )
  }
  setAccessToken = (token: string) => {
    this.access_token = token
  }
}

const http = new Http().instance
export default http
