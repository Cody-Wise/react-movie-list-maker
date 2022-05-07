import { useState, useEffect } from 'react';

export function useMovieForm() {
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

    setAllMovies([...allMovies]);
  }

  function handleFilterMovies() {
    const matchingMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(queryFilter.toLowerCase())
    );
    setFilteredMovies([...matchingMovies]);
  }

  useEffect(handleFilterMovies, [queryFilter, allMovies]);

  return {
    allMovies,
    setAllMovies,
    filteredMovies,
    setFilteredMovies,
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
    useEffect,
  };
}
