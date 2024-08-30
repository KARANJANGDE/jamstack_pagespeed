import axios, { type AxiosInstance } from 'axios'

export class ApiService {
  public client: AxiosInstance
  private isProxy: boolean
  constructor(isProxy = false) {
    this.isProxy = isProxy
    this.client = axios.create({
      baseURL: '/api',
      headers: {
        Accept: 'application/json',
      },
    })
  }
}
