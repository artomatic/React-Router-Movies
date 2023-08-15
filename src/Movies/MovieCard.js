import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function MovieCard (props) {

  
  let {id} = useParams();
  const [move, setMove] = useState()

  

  //change the URL id when a movie is clicked
  const navigate = useNavigate()
  const movieClick = () => {
    console.log(`navigating to movie ${id}`)
    navigate(`/movies/${move.id}`)
  }

  //once clicked, aka URL is updated, fetch add. user data
  useEffect(() => {
    if (id) {
    
    axios
      .get(`http://localhost:5001/api/movies/${id}`)
      .then(response => {
        // console.log(`fetching id ${id}`, response)
        setMove(response.data)
        // console.log(move)
      })
      .catch(error => {
        console.error(error);
      });
    }

    else {
      setMove(props.movie)
    }

    console.log(move)

  }, [id]);


  if (!move) return ('move not set')

  return (
      
    <>
    <div className="movie-card" onClick={movieClick}>


    <h2>{move.title}</h2>
    <div className="movie-director">
      Director: <em>{move.director}</em>
    </div>
    <div className="movie-metascore">
      Metascore: <strong>{move.metascore}</strong>
    </div>
    

    {id && 
      (
        <div>
          <h3>Actors</h3>
          {move.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
          <div className="save-button">Save</div>
        </div>
      )
    }


  </div>
  </>


  )

}
