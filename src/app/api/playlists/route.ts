import { api } from "@/lib/api";

export async function GET(request: Request) {
  const ids = [
		'PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c',
		'PL4-IK0AVhVjNcjfYDQEseNxuarDjSEdZK',
		'PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2',
		'PLf3cxVeAm439RsaHrGACExl3o060pM7W2',
		'PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU',
		'PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj',
		'PL0Zuz27SZ-6M1J5I1w2-uZx36Qp6qhjKo',
		'PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i',
	]

  const response = await api.get('/playlists', { params: { id: ids.join(','), part: 'snippet', maxResults: 20 } })
  
  return new Response(JSON.stringify({ playlists: response.data.items }))
}