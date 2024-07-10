import React from 'react';
import '../MovieItem.css';

const MovieItem = ({ movie, onClick }) => {
    return (
        <div className="movie-item" onClick={onClick}>
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <div className="movie-details">
                <h2>{movie.name}</h2>
                <div className="movie-details-time">
                    <p>{movie.time} time</p>
                    <p>{movie.year}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;
