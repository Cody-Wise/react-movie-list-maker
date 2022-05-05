import React from 'react';
import Movie from './Movie';

export default function MovieList(props) {
  return (
    <div className="list">
      {props.allMovies.map((movie, i) => (
        <Movie
          key={`${movie.title}-${movie.Year}-${i}`}
          handleDeleteMovie={props.handleDeleteMovie}
          movie={movie}
        />
      ))}
    </div>
  );
}
