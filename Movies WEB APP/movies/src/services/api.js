const API_KEY = "383d63cb65346e29530fc4ed150fb9c7";
const BASE_URL = "https://api.themoviedb.org/3";

export const displayPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json();
    return data.results;
}