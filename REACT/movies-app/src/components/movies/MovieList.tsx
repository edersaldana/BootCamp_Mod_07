import type { Movie } from "@/types/Movie"
import { MovieCard } from "./MovieCard"

type Props = {
  movies: Movie[]
}

export function MovieList({ movies }: Props) {
  if (movies.length === 0) {
    return <p>No hay películas</p>
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie, index) => (
        <MovieCard
          key={`${movie.imdbID}-${index}`}
          movie={movie}
        />
      ))}
    </div>
  )
}
