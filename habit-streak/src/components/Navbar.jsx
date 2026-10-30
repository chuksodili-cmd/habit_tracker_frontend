import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="container navbar-inner">
                <a href="#top" className="logo">🔥 Habit Tracker</a>
                <div className="nav-links">
                    <Link to="/login">Login in</Link>
                    <a href="/signup" className="btn btn-primary">Get Started</a>
                </div>
            </div>
        </div>
    )
}