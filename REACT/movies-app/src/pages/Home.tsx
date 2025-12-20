import { useState } from "react"
import { Input } from "@/components/ui/input"
import { MovieList } from "@/components/movies/MovieList"
import { useMovies } from "@/hooks/useMovies"

export default function Home() {
  const [search, setSearch] = useState("")
  const { movies, isLoading, error } = useMovies(search)

  return (
    <div className="space-y-4">
      <Input
        placeholder="Buscar película..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && <p className="text-red-500">Error al cargar películas</p>}
      {isLoading && <p>Cargando...</p>}

      {!isLoading && <MovieList movies={movies} />}
    </div>
  )
}
