s
import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';
import { movies } from './movies';

const MovieList = () => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const filterMovies = (filters) => {
    setFilteredMovies(
      movies.filter(
        (movie) =>
          (!filters.title || movie.title.toLowerCase().includes(filters.title.toLowerCase())) &&
          (!filters.rating || movie.rating >= filters.rating)
      )
    );
  };

  return (
    <div className="movie-list">
      <Filter onFilter={filterMovies} />
      <div className="movie-cards">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
