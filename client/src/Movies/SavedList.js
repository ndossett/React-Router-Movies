import React from 'react';
import { useHistory } from 'react-router-dom'

export default function SavedList(props) {

  const history = useHistory()

  const routeToMovieList = () => {
    console.log(history, 'HISTORY')
    history.push('/MovieList')
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div onClick={routeToMovieList} className="home-button">Home</div>
    </div>
  );
}
