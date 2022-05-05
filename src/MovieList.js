import React from 'react';
import Movie from './Movie';

export default function MovieList(props) {
  return (
    <div className="list">
      {props.allMovies.map((movie, i) => (
        <Movie
          key={`${props.movieFormTitle}-${props.movieFormYearReleased}-${i}`}
          title={movie.movieFormTitle}
          year={movie.movieFormYearReleased}
          director={movie.movieFormDirector}
          posterColor={movie.movieFormColor}
          handleDeleteMovie={props.handleDeleteMovie}
        />
      ))}
    </div>
  );
}
