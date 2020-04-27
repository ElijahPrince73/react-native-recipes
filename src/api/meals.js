import axios from 'axios'
import ENV from './variables'

const instance = axios.create({
  baseURL: `https://www.themealdb.com/api/json/v2/${ENV.API_KEY}`
})

export default instance