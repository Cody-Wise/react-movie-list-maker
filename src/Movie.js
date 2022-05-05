import React from 'react';

export default function Movie(props) {
  return (
    <div
      onClick={() => props.handleDeleteMovie(props.movieFormTitle)}
      className="movie-poster"
      style={{ background: props.movieFormColor }}
    >
      <h3>props.movieFormTitle</h3>
      <p>props.movieFormYearReleased</p>
      <p>props.movieFormDirector</p>
      <p>props.movieFormColor</p>
    </div>
  );
}
