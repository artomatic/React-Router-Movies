import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SavedList(props) {

  const navigate = useNavigate() 
  const onClick = () => {
    navigate('/')
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie" key={movie.id}>{movie.title}</span>
      ))}
      <div className="home-button" onClick={onClick}>Home</div>
    </div>
  );
}
