import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function MovieCard (props) {

  
  let {id} = useParams();
  const [move, setMove] = useState(props.movie)

  

  //change the URL id when a movie is clicked
  const navigate = useNavigate()
  const movieClick = () => {
    console.log('navigating to movie')
    navigate(`/movies/${move.id}`)
  }

  //once clicked, aka URL is updated, fetch add. user data
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`)
      .then(response => {
        console.log(`fetching selected movie for ${id}`)
        setMove(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);


  return (

    
      
    <>
    {console.log(id)}
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
          {console.log(move.stars)}
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
