import axios from 'axios'
import { APIPath } from '../constants'
import { store } from '../store'

const instance = axios.create({
    baseURL: APIPath,
    timeout: 5000
})

instance.interceptors.request.use((config : any) => {
    const token = store.getState().login.accessToken;
    if (token) config.headers.Authorization = `Bearer ${token}`;
  
    return config;
})

export default instance