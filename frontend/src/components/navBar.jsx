import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar fixed-top navbar-light" style={{backgroundColor: "#4e5cad"}}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    Home
                </Link>
            </div>
        </nav>

    )
}

export default NavBar;