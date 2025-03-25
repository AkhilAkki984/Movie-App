import Moviecomponent from "../components/Moviecard.jsx";
import { useState, useEffect } from "react";
import { search, getpopularmovies } from "../services/api.js";

function Home() {
    const [searchquery, setSearchquery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const searchContainerStyle = {
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px"
    };

    const searchInputStyle = {
        padding: "10px",
        fontSize: "16px",
        width: "300px",
        borderRadius: "5px",
        border: "1px solid #ccc"
    };

    const searchButtonStyle = {
        padding: "10px 15px",
        marginLeft: "10px",
        fontSize: "16px",
        backgroundColor: "#ff4500",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px"
    };

    const moviesGridStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center"
    };
    useEffect(()=> {
        const loadpopularmovies = async ()=>{
            try {
                const popularmovies = await getpopularmovies()
                setMovies(popularmovies)
            }catch (err){
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }

        }
        loadpopularmovies()
    },[])
    
    const Searchbtn = async (e) => {
        e.preventDefault();
        if (!searchquery.trim()) return
        if(loading) return

        setLoading(true)
        try{
            const searchresults = await search(searchquery)
            setMovies(searchresults)
            setError(null)
        }catch(err){
            console.log(err)
            setError("Failed to search movies.....")
        }finally{
            setLoading(false)
        }
        
    }

    return (
        <div>
            <form onSubmit={Searchbtn} style={searchContainerStyle}>
                <input
                    type="text"
                    placeholder="Search for movie"
                    style={searchInputStyle}
                    value={searchquery}
                    onChange={(e) => setSearchquery(e.target.value)}
                />
                <button type="submit" style={searchButtonStyle}>Search</button>
            </form>
            <div style={moviesGridStyle}>
                {movies.map((movie) => movie.title.toLowerCase().startsWith(searchquery.toLowerCase()) && (
                    <Moviecomponent movie={movie} key={movie.id} />)
                )}
            </div>
        </div>
    );
}
export default Home;