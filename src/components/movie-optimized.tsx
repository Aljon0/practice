import { useCallback, useMemo, useState } from "react";
import React from "react";
const calculateMovieScore = (rating: number, reviews: number) => {
  console.log(" Calculating movie score...");
  // Simulate a heavy calculation
  for (let i = 0; i < 1000000000; i++) {
    return (rating * reviews) / 10;
  }
};

//Main Component
export function OptimizedMovieApp() {
  const [count, setCount] = useState(0);
  const [movies] = useState([
    { id: 1, title: "The Matrix", rating: 4.8, reviews: 100 },
    { id: 2, title: "Inception", rating: 4.5, reviews: 80 },
  ]);

  const handLike = useCallback((movieId: number) => {
    console.log("👍 Liked movie:", movieId);
  }, []);

  const movieScore = useMemo(
    () => calculateMovieScore(movies[0].rating, movies[0].reviews),
    [movies[0].rating, movies[0].reviews]
  );

  return (
    <div>
      <h1>Optimized Movie App</h1>

      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>

      <p>Movie Score: {movieScore}</p>

      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          onLike={handLike}
        />
      ))}
    </div>
  );
}

type MovieProps = {
  id: number;
  title: string;
  rating: number;
  onLike: (id: number) => void;
};

const Movie = React.memo(({ id, title, rating, onLike }: MovieProps) => {
  console.log("Rendering movie:", title);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>Rating: {rating}⭐</p>
      <button onClick={() => onLike(id)}>Like 👍 </button>
    </div>
  );
});
