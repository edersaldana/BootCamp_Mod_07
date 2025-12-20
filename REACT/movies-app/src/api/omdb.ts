const API_KEY = import.meta.env.VITE_OMDB_API_KEY  
const BASE_URL = "https://www.omdbapi.com/"

export async function searchMovies(query: string) {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${query}`
  )

  if (!res.ok) {
    throw new Error("Error en la API OMDb")
  }

  return res.json()
}
