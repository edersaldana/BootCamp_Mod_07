import { useState } from "react"
import type { Movie } from "@/types/Movie"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  toggleFavorite,
  isFavorite,
} from "@/utils/favorites"

type Props = {
  movie: Movie
}

export function MovieCard({ movie }: Props) {
  const [favorite, setFavorite] = useState(
    isFavorite(movie.imdbID)
  )

  const handleFavorite = () => {
    toggleFavorite(movie)
    setFavorite(!favorite)
  }

  return (
    <Card className="p-2">
      <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
          alt={movie.Title}
          className="w-full h-[450px] object-cover rounded"
          onError={(e) => {
            e.currentTarget.src = "/no-image.jpg"
          }}
        />

      <div className="mt-2 space-y-1">
        <h3 className="font-semibold text-sm">{movie.Title}</h3>
        <p className="text-xs text-muted-foreground">{movie.Year}</p>

        <Button
          size="sm"
          variant={favorite ? "destructive" : "default"}
          className="w-full mt-2"
          onClick={handleFavorite}
        >
          {favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        </Button>
      </div>
    </Card>
  )
}
