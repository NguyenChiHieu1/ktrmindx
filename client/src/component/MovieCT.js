// MoviePopup.jsx
import React from 'react';
import '../MovieCT.css';

const MovieCT = ({ movie, onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup">
                <div className="popup-image"><img src={movie.image} alt={movie.title} /></div>
                <div className="popup-content">
                    <button className="close-btn" onClick={onClose}>x</button>
                    <h2 >{movie.name}</h2>
                    <div className="popup-time">
                        <p>{movie.time} time</p>
                        <p>{movie.year}</p>
                    </div>
                    <p className="popup-introduce">{movie.introduce}</p>
                    <div className="popup-play">
                        <img src="./play.svg" alt="" />
                        <p>PLAY MOVIE</p>
                    </div>
                </div>
                {/* Thêm các thông tin chi tiết khác của phim */}
            </div>
        </div>
    );
};

export default MovieCT;
