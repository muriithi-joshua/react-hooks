
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const addMovie = (title, description, posterURL, rating) => {
    const newMovie = { title, description, posterURL, rating };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= ratingFilter
  );

  return (
    <div className="app">
      <h1>Movie List</h1>
      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie('New Movie', 'Description', 'url', 5)}>Add Movie</button>
    </div>
  );
};

export default App;
