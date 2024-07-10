import React from 'react';
import '../MovieList.css';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onMovieClick }) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieItem key={movie.id} movie={movie} onClick={() => onMovieClick(movie)} />
            ))}
        </div>
    );
};

export default MovieList;
