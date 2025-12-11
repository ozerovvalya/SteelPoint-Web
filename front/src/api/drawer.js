import axios from '@/axios.js'

export async function addToCart(productId) {
  const response = await axios.post('/cart', { productId })
  return response.data
}

export async function getCartItems() {
  const response = await axios.get('/cart')
  return response.data
}
