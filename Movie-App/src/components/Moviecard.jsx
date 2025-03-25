import { useMovieContext } from "../context/moviecontext";

function MovieComponent({ movie }) {
    const { isfav, addtofav, removefav } = useMovieContext();
    const fav = isfav(movie.id);

    const movieCardStyle = {
        background: "white",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease-in-out",
        width: "200px",
        textAlign: "center",
        padding: "10px",
        margin: "10px",
        position: "relative",
        cursor: "pointer"
    };

    const moviePosterStyle = {
        width: "100%",
        height: "250px",
        objectFit: "cover",
        borderRadius: "8px 8px 0 0"
    };

    const favBtnStyle = {
        background: "none",
        border: "none",
        fontSize: "24px",
        cursor: "pointer",
        position: "absolute",
        top: "10px",
        right: "10px",
        transition: "color 0.3s ease-in-out",
        color: fav ? "red" : "gray"
    };

    function handleFavClick(e) {
        e.preventDefault();
        if (fav) {
            removefav(movie.id);
            console.log("Removed from Wishlist");
        } else {
            addtofav(movie);
            console.log("Added to Wishlist");
        }
    }

    return (
        <div style={movieCardStyle}>
            <button style={favBtnStyle} onClick={handleFavClick}>
                {fav ? "❤️" : "🤍"}
            </button>
            <img 
                src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                style={moviePosterStyle} 
            />
            <div>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieComponent;
