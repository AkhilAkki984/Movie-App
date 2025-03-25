import { useMovieContext } from "../context/moviecontext";
import MovieComponent from "../components/Moviecard";

function Favorites() {
    const { favorite } = useMovieContext(); 

    const moviesGridStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center"
    };

    if (favorite.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>No Favorite Movies</h2>
                <p>Start adding your favorite movies now</p>
            </div>
        );
    }

    return (
        <div>
            <h2>YOUR FAVORITES</h2>
            <div style={moviesGridStyle}>
                {favorite.map((movie) => (
                    <MovieComponent movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Favorites;
