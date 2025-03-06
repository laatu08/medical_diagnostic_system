import { Router, Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeartDisease from "./pages/HeartDisease";
import Diabetes from "./pages/Diabetes";
import LungCancer from "./pages/LungCancer";
import Navbar from "./components/Navbar";
import Parkinson from "./pages/Parkinson"
import Hypothyroid from "./pages/Hypothyroid"
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/heart-disease" element={<HeartDisease />} />
                <Route path="/diabetes" element={<Diabetes />} />
                <Route path="/lung-cancer" element={<LungCancer />} />
                <Route path="/parkinson" element={<Parkinson />} />
                <Route path="/hypothyroid" element={<Hypothyroid />} />
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
