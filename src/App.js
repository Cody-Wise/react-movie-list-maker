import './App.css';
import { useState, useEffect } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');

  function handleDeleteMovie(title) {
    const indexToRemove = allMovies.findIndex((movie) => movie.title === title);

    allMovies.splice(indexToRemove, 1);

    setAllMovies(...allMovies);
  }

  function handleFilterMovies(search) {
    if (search) {
      const matchingMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies([matchingMovies]);
    } else {
      setFilteredMovies([allMovies]);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <MovieForm
          movieFormTitle={movieFormTitle}
          setMovieFormYearReleased={setMovieFormYearReleased}
          setMovieFormTitle={setMovieFormTitle}
          movieFormDirector={movieFormDirector}
          setMovieFormColor={setMovieFormColor}
        />

        {movieFormTitle || movieFormYearReleased ? (
          <Movie
            movieFormTitle={movieFormTitle}
            movieFormYearReleased={movieFormYearReleased}
            movieFormColor={movieFormColor}
          />
        ) : (
          <div>Type to show preview</div>
        )}

        <MovieList allMovies={allMovies} handleDeleteMovie={handleDeleteMovie} />
        <div className="filter">
          Filter Movies
          <input onChange={(e) => handleFilterMovies(e.target.value)} />
        </div>
      </header>
    </div>
  );
}

export default App;
