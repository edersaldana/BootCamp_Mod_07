import type { Movie } from "@/types/Movie"

const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const BASE_URL = "https://www.omdbapi.com/"

type OmdbResponse = {
  Search: Movie[]
  Response: "True" | "False"
  Error?: string
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`)
  const data: OmdbResponse = await res.json()

  if (data.Response === "False") {
    return []
  }

  return data.Search
}
