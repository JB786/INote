import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from "./logo.svg"

function Navbar() {

    const location = useLocation();
    let navigate = useNavigate();

    // useEffect(()=>{
    //     console.log(location.pathname);
    // },[location])

    const handleLogout = ()=>{
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-expand-lg bg-warning" data-bs-theme="light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Bootstrap" width="60" height="40" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {localStorage.getItem("token") && <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""} fw-bold`} aria-current="page" to="/">Home</Link>
                        </li>}
                        {localStorage.getItem("token") && <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""} fw-bold`} to="/about">About</Link>
                        </li>}
                    </ul>
                    {!localStorage.getItem("token") ? <form className="d-flex" role="search">
                        {location.pathname === "/login" || <Link className="btn btn-dark mx-1" to="/login" role="button">Sign in</Link>}
                        {location.pathname === "/signup" || <Link className="btn btn-dark" to="/signup" role="button">Sign Up</Link>}
                    </form>: <button onClick={handleLogout} className="btn btn-dark">Logout</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
