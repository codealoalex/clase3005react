import "./Footer.css";

export default function Footer() {
    return (
        <footer className="container-footer">
            <div className="footer-desc">
                <h6>CinemaApp</h6>
                <p>&copy;2026 CinemaApp, All rights reserved.</p>
            </div>
            <div className="footer-anchor">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Us</a>
            </div>
        </footer>
    )
}