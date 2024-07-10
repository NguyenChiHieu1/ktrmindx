import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import MovieCT from './MovieCT';
import '../Home.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const moviesPerPage = 4;

    useEffect(() => {
        axios.get('http://localhost:5000/api/movie/getallmovie')
            .then(response => {
                setMovies(response.data.data);
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi gọi API:', error.message);
                if (error.response) {
                    console.error('Phản hồi từ server:', error.response.data);
                }
            });
    }, []);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(movies.length / moviesPerPage) - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const openMoviePopup = (movie) => {
        setSelectedMovie(movie); // Cập nhật selectedMovie khi click vào phim
    };

    const closeMoviePopup = () => {
        setSelectedMovie(null); // Đóng pop-up bằng cách reset selectedMovie về null
    };

    const startIndex = currentPage * moviesPerPage;
    // Lấy các phim cho trang hiện tại từ selectedMovies
    const selectedMovies = movies.slice(startIndex, startIndex + moviesPerPage);

    return (
        <div className="App">
            <div className='header'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <h1>MOVIE <span>UI</span></h1>
                <img src="./search.svg" alt="" />
            </div>
            <div className="line"></div>
            <MovieList movies={selectedMovies} onMovieClick={openMoviePopup} />
            <div className="pagination">
                {currentPage > 0 && <button onClick={handlePrevPage}>Previous</button>}
                {currentPage < Math.ceil(movies.length / moviesPerPage) - 1 && (
                    <button onClick={handleNextPage}>Next</button>
                )}
            </div>
            {selectedMovie && (
                <MovieCT movie={selectedMovie} onClose={closeMoviePopup} />
            )}
        </div>
    );
};

export default Home;