import axios from 'axios'
import store from '@/vuex'

const instance = axios.create()

instance.interceptors.request.use(config => {
  config.headers['Authorization'] = store.getters['security/token']
  return config
}, error => {
  return Promise.reject(error)
})
export default instance
