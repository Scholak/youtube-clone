import { api } from '@/lib/api'

export async function GET(request: Request) {
  const response = await api.get('/videoCategories', {params: {regionCode: 'TR'}})
  
  return new Response(JSON.stringify({ categories: response.data.items }))
}