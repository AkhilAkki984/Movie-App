import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorite, setFavorite] = useState([]);

    
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorite");
        if (storedFavs) setFavorite(JSON.parse(storedFavs));
    }, []);

    
    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favorite));
    }, [favorite]);

    const addtofav = (movie) => {
        if (!isfav(movie.id)) {
            setFavorite((prev) => [...prev, movie]);
        }
    };

    const removefav = (movieId) => {
        setFavorite((prev) => prev.filter((movie) => movie.id !== movieId));
    };

        const isfav = (movieId) => {
            return favorite.some((movie) => movie.id === movieId);
        };

    const value = {
        favorite,
        addtofav,
        removefav,
        isfav,
    };

    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
