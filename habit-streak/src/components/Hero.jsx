import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <div className="hero" id="top">
            <div className="container hero-inner">
                <div className="hero-text">
                    <hi Build habits that stick one day at a time></hi>
                    <p>Habits That Actually Stick</p>
                    <div className="hero-action">
                        <Link to="/signup" className="btn btn-primary">Start your streak</Link>
                        <a href="#how-it-work btn btn-outline">See how it works</a>
                    </div>
                </div>
                <div className="hero-card">
                    <p hero-card-label></p>
                    <p className="hero-card-streak">12 days streak</p>
                </div>
            </div>
        </div>
    )
}