import React from 'react';

// const [allMovies, setAllMovies] = useState([]);
// const [filteredMovies, setFilteredMovies] = useState(allMovies);
// const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
// const [movieFormDirector, setMovieFormDirector] = useState('');
// const [movieFormTitle, setMovieFormTitle] = useState('');
// const [movieFormColor, setMovieFormColor] = useState('');

export default function MovieList(props) {
  function handleSubmit(e) {
    e.preventDefault();

    const newMovie = {
      title: props.movieFormTitle,
      Year: props.movieFormYearReleased,
      Director: props.movieFormDirector,
      Color: props.movieFormColor,
    };

    props.setAllMovies([...props.allMovies, newMovie]);
    props.setMovieFormTitle('');
    props.setMovieFormYearReleased('');
    props.setMovieFormDirector('');
    props.setMovieFormColor('red');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            value={props.movieFormTitle}
            onChange={(e) => props.setMovieFormTitle(e.target.value)}
          />
        </label>
        <label>
          Year Released
          <input
            value={props.movieFormYearReleased}
            onChange={(e) => props.setMovieFormYearReleased(e.target.value)}
          />
        </label>
        <label>
          Director
          <input
            value={props.movieFormDirector}
            onChange={(e) => props.setMovieFormDirector(e.target.value)}
          />
        </label>
        <label>
          Poster Color
          <select
            value={props.movieFormColor}
            onChange={(e) => props.setMovieFormColor(e.target.value)}
          >
            <option value="crimson">Red</option>
            <option value="lightblue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="lightgreen">Green</option>
          </select>
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}
