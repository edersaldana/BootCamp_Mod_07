import { MovieList } from "@/components/movies/MovieList"
import { getFavorites } from "@/utils/favorites"

export const Favorites = () => {
  const favorites = getFavorites()

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Mis Favoritos
      </h2>

      <MovieList movies={favorites} />
    </div>
  )
}
