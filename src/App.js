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
  const [movieFormColor, setMovieFormColor] = useState('red');
  const [queryFilter, setQueryFilter] = useState('');

  function handleDeleteMovie(title) {
    const indexToRemove = allMovies.findIndex((movie) => movie.title === title);

    allMovies.splice(indexToRemove, 1);

    setAllMovies(...allMovies);
  }

  function handleFilterMovies() {
    if (queryFilter) {
      const matchingMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(queryFilter.toLowerCase())
      );
      setFilteredMovies([matchingMovies]);
    } else {
      setFilteredMovies([allMovies]);
    }
  }

  useEffect(handleFilterMovies, [queryFilter]); //eslint-disable-line

  return (
    <div className="App">
      <header className="App-header">
        <MovieForm
          movieFormTitle={movieFormTitle}
          setMovieFormYearReleased={setMovieFormYearReleased}
          setMovieFormTitle={setMovieFormTitle}
          movieFormDirector={movieFormDirector}
          setMovieFormColor={setMovieFormColor}
          setMovieFormDirector={setMovieFormDirector}
          allMovies={allMovies}
          setAllMovies={setAllMovies}
          movieFormColor={movieFormColor}
          movieFormYearReleased={movieFormYearReleased}
        />

        {movieFormTitle || movieFormYearReleased ? (
          <Movie
            movie={{
              title: movieFormTitle,
              Year: movieFormYearReleased,
              Director: movieFormDirector,
              Color: movieFormColor,
            }}
            handleDeleteMovie={() => handleDeleteMovie()}
          />
        ) : (
          <div>Type to show preview</div>
        )}

        <MovieList
          allMovies={filteredMovies.length ? filteredMovies : allMovies}
          handleDeleteMovie={handleDeleteMovie}
        />
        <div className="filter">
          Filter Movies
          <input onChange={(e) => setQueryFilter(e.target.value)} />
        </div>
      </header>
    </div>
  );
}

export default App;
