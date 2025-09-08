import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {

    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const storedMovies = localStorage.getItem("favourties")

        if (storedMovies) setFavourites(JSON.parse(storedMovies))
    }, [])

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])

    const addToFavs = (movie) => {
        setFavourites(prev => [...prev, movie])
    }

    const removeFromFavs = (movieId) => {
        setFavourites(prev => prev.filter(movie => movieId !== movie.id))
    }

    const isFavourties = (movieId) => {
        return favourites.some(movie => movieId == movie.id)
    }

    const values = {
        favourites,
        addToFavs,
        removeFromFavs,
        isFavourties
    }

    return (
        <MovieContext.Provider value={values}>
            {children}
        </MovieContext.Provider>
    )
}