import React from 'react';

export default function Movie({ movie, handleDeleteMovie }) {
  return (
    <div
      onClick={() => handleDeleteMovie(movie.movieFormTitle)}
      className="movie-poster"
      style={{ backgroundColor: movie.Color }}
    >
      <h3>{movie.title}</h3>
      <p>{movie.Year}</p>
      <p>{movie.Director}</p>
    </div>
  );
}
