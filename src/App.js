import './App.css';
import { useEffect } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';
import { useMovieForm } from './useMovieForm';

function App() {
  const {
    allMovies,
    setAllMovies,
    filteredMovies,
    movieFormYearReleased,
    setMovieFormYearReleased,
    movieFormDirector,
    setMovieFormDirector,
    movieFormTitle,
    setMovieFormTitle,
    movieFormColor,
    setMovieFormColor,
    queryFilter,
    setQueryFilter,
    handleDeleteMovie,
    handleFilterMovies,
  } = useMovieForm();

  // function handleDeleteMovie(title) {
  //   const indexToRemove = allMovies.findIndex((movie) => movie.title === title);

  //   allMovies.splice(indexToRemove, 1);

  //   setAllMovies([...allMovies]);
  // }

  // function handleFilterMovies() {
  //   const matchingMovies = allMovies.filter((movie) =>
  //     movie.title.toLowerCase().includes(queryFilter.toLowerCase())
  //   );
  //   setFilteredMovies([...matchingMovies]);
  // }

  useEffect(handleFilterMovies, [queryFilter, allMovies]); //eslint-disable-line

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

        <div className="filter">
          Filter Movies
          <input onChange={(e) => setQueryFilter(e.target.value)} />
        </div>
        <MovieList
          allMovies={filteredMovies.length ? filteredMovies : allMovies}
          handleDeleteMovie={handleDeleteMovie}
        />
      </header>
    </div>
  );
}

export default App;
