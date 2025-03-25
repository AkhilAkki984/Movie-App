import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favpage.jsx";
import Navbar from "./components/Navbar.jsx";
import { MovieProvider } from "./context/moviecontext.jsx";

function App() {
    const appStyle = {
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        margin: "0",
        padding: "0",
        minHeight: "100vh"  
    };

    const mainContentStyle = {
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto"
    };

    return (
        <MovieProvider>
            <div style={appStyle}>
                <Navbar />
                <main style={mainContentStyle}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favorite" element={<Favorites />} />
                    </Routes>
                </main>
            </div>
        </MovieProvider>
    );
}

export default App;
