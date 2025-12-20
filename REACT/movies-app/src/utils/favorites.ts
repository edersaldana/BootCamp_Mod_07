import type { Movie } from "@/types/Movie"

const STORAGE_KEY = "favorite_movies"

export function getFavorites(): Movie[] {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

export function isFavorite(id: string): boolean {
  return getFavorites().some(movie => movie.imdbID === id)
}

export function toggleFavorite(movie: Movie) {
  const favorites = getFavorites()

  const exists = favorites.some(
    fav => fav.imdbID === movie.imdbID
  )

  const updated = exists
    ? favorites.filter(fav => fav.imdbID !== movie.imdbID)
    : [...favorites, movie]

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}
