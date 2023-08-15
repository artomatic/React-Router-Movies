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

  const addToSavedList = (move) => {

    let s = saved
    console.log(saved)
    const doesExist = s.some(movie => movie.id === move.id)

    if (!doesExist)
    {
    s.push(move)
    setSaved(s)
    }
  

    

    
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={saved} addToSavedList = {addToSavedList}/>
      <Routes>
      <Route path = '/' element = {<MovieList movies = {movies} addToSavedList = {addToSavedList}/>} ></Route>
      <Route path = 'movies/:id' element = {  <MovieCard movies = {movies} addToSavedList = {addToSavedList}/>  } ></Route>
    </Routes>
    </div>


  );
}
