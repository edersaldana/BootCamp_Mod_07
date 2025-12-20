import useSWR from "swr"
import { searchMovies } from "@/services/omdb"
import { SEARCH_TERMS } from "@/constants/searchTerms"

const getRandomTerm = () => {
  return SEARCH_TERMS[Math.floor(Math.random() * SEARCH_TERMS.length)]
}

export const useMovies = (search: string) => {
  const query = search.trim() !== "" ? search : getRandomTerm()

  const { data, error, isLoading } = useSWR(
    ["movies", query],
    () => searchMovies(query)
  )

  return {
    movies: data ?? [],
    isLoading,
    error,
  }
}
