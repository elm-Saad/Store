// custom axios instance

import axios from "axios"

const baseUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
    baseURL:baseUrl
})


export const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price / 100).toFixed(2))
    return dollarsAmount
}

//Sequence generator (range)

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    )
  })
}

