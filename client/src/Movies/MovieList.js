import React from 'react';
import Movie from './Movie';
import { Link, useRouteMatch } from 'react-router-dom'

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id} = props.movie;

  const routeToMovieID = () => {
    Movie(id)
    console.log(Movie(id))
  }

  return (
    <Link to={`/movies/${routeToMovieID}`}>
      <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      </div>
    </Link>
  );
}

