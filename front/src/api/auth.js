import axios from '@/axios.js'

export async function login(credentials) {
  const response = await axios.post('/auth/login', credentials)
  return response.data
}

export async function logout() {
  return axios.post('/auth/logout')
}
