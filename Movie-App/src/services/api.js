const API_KEY ="1aad0eb6fc3cca5df540a3752de2af4e"
const BASE_URL = "https://api.themoviedb.org/3"

export const getpopularmovies = async () =>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}

export const search = async (query) =>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
}