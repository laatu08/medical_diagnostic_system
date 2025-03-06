import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{display: "flex", justifyContent:"space-between", padding:"30px", background: "#282c34", color: "white", fontSize:"18px " }}>

            <div><Link to="/" style={{ margin: "1rem", color: "white", textDecoration: "none" }}>PMDA</Link></div>

            <div><Link to="/heart-disease" style={{ margin: "1rem", color: "white", textDecoration: "none" }}>Heart Disease</Link>
            <Link to="/diabetes" style={{ margin: "1rem", color: "white", textDecoration: "none" }}>Diabetes</Link>
            <Link to="/lung-cancer" style={{ margin: "1rem", color: "white", textDecoration: "none" }}>Lung Cancer</Link>
            <Link to="/parkinson" style={{ margin: "1rem", color: "white", textDecoration: "none" }}>Parkinson</Link>
            <Link to="/hypothyroid" style={{ margin: "1rem", color: "white", textDecoration: "none" }}>Hypothyroid</Link></div>
            
        </nav>
    );
}

export default Navbar;
