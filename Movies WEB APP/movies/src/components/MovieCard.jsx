import React from 'react'
import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext'

const MovieCard = ({ movie }) => {
    const { isFavourties, addToFavs, removeFromFavs } = useMovieContext();

    const favourite = isFavourties(movie.id)
    const addFavmovie = (e) => {
        e.preventDefault()
        if (favourite) removeFromFavs(movie.id)
        else addToFavs(movie)
    }
    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className='favour-btn'>
                    <button className={`like-btn ${favourite ? "active" : ""}`} onClick={addFavmovie}>♥</button>
                </div>
            </div>

            <div className='movie-info'>
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard