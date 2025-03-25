import { Link } from "react-router-dom";

function Navbar() {
    const navbarStyle = {
        backgroundColor: "#333",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px"
    };

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        fontSize: "18px",
        margin: "0 10px"
    };

    const navLinksStyle = {
        display: "flex",
        gap: "15px"
    };

    return (
        <nav style={navbarStyle}>
            <div>
                <Link to="/" style={linkStyle}>Movie App</Link>
            </div>
            <div style={navLinksStyle}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/favorite" style={linkStyle}>Favorites</Link>
                
            </div>
        </nav>
    );
}

export default Navbar;
