import React, { useEffect, useState } from 'react'
import '../css/Home.css'
import MovieCard from '../components/MovieCard'
import { displayPopularMovies, searchMovies } from '../services/api'

const Home = () => {

    const [movies, setMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const popularMovies = await displayPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log("Error in Loading", err)
            }
        }
        loadMovies()

    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return

        try {
            const results = await searchMovies(searchQuery);
            setMovies(results);
        } catch (err) {
            console.log("Error in searching", err)
        }

    }

    return (
        <div className='home-content'>
            <form onSubmit={handleSubmit} className='home-inputs'>
                <input type='text' placeholder='Search Your Favourite Movies....' value={searchQuery} onChange={((e) => setSearchQuery(e.target.value))} />
                <button>Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie =>
                    <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}

export default Home