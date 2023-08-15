import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import { useNavigate, useSubmit } from 'react-router-dom';
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












// return (
//   <div className="movie-list">
//     {props.movies.map(movie => (
//       <MovieDetails key={movie.id} movie={movie} />
//     ))}
//   </div>
// );
// }

// function MovieDetails(props) {
// const { title, director, metascore } = props.movie;


// const navigate = useNavigate()
// const onClick = () => {
//   console.log('navigating to movie')
//   navigate(`/movies/${props.movie.id}`)
// }





// return (
//   <div className="movie-card" onClick={onClick}>
//     <h2>{title}</h2>
//     <div className="movie-director">
//       Director: <em>{director}</em>
//     </div>
//     <div className="movie-metascore">
//       Metascore: <strong>{metascore}</strong>
//     </div>
//   </div>
// );
// }
