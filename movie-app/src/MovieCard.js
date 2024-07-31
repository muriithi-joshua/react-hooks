// src/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.posterURL} alt={movie.title} />
        <h2>{movie.title}</h2>
      </Link>
    </div>
  );
};

export default MovieCard;
