import React from 'react'
import '../css/Favourites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

const Favourites = () => {

    const { favourites } = useMovieContext()

    if (favourites) {
        return (
            <div className="movies-grid">
                {favourites.map(movie =>
                    <MovieCard movie={movie} key={movie.id} />)}
            </div>
        )
    }
    return (
        <div className='favourites-page'>
            <h1>No Favourites Here</h1>
        </div>
    )

}

export default Favourites