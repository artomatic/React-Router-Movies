import React from 'react';
import MovieCard from './MovieCard';



export default function MovieList({movies}) {



  return (
    <div className="movie-list">
      {movies.map(mov => (
        <MovieCard key={mov.id} movie={mov} />
      ))}
    </div>
  );
}

