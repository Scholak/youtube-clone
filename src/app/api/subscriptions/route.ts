import { api } from "@/lib/api"

export async function GET(request: Request) {
  const ids = [
		'UCz6xwevB88lLD0PoQobvcOg',
		'UCmXmlB4-HJytD7wek0Uo97A',
		'UC80PWRj_ZU8Zu0HSMNVwKWw',
		'UCvGwM5woTl13I-qThI4YMCg',
		'UCUyeluBRhGPCW4rPe_UvBZQ',
		'UCsrVDPJBYeXItETFHG0qzyw',
		'UCW_4e6sUTMWHxlF06aErH9w',
		'UC_ML5xP23TOWKUcc-oAE_Eg',
		'UCFbNIlppjAuEX4znoulh0Cw',
		'UCJZv4d5rbIKd4QHMPkcABCw',
	]

  const response = await api.get('/channels', {params: {part: 'snippet', id: ids.join(',')}})
  return new Response(JSON.stringify({subscriptions: response.data.items}))
}