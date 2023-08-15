import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieCard from './Movies/MovieCard';
import MovieList from './Movies/MovieList'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);



  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') 
        .then(response => {
          setMovies(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Routes>
      <Route path = '/' element = {<MovieList movies = {movies} />} ></Route>
      <Route path = 'movies/:id' element = {  <MovieCard movies = {movies}/>  } ></Route>
    </Routes>
    </div>


  );
}
