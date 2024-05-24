export const api = `import { env } from '@/env'

/**
 * Example:
 * 
 * async function getProducts(): Promise<Product[]> {
 *  const products = await api('/products')
 * 
 *  return products
 * }
 **/
export async function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const url = new URL(path, baseUrl)

  try {
    const response = await fetch(url, init)
    const data = await response.json()

    if (!response.ok) {
      throw new Error('Fetch was unsuccessfull. Is the query parameter valid?')
    }

    return data
  } catch (error) {
    console.error(error)

    throw error
  }
}
`
