import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-content">
        {/* Quick Navigation */}
        <div className="footer-nav">
          <Link to="/gallery" className="footer-link">
            Gallery
          </Link>
          <Link to="/clients" className="footer-link">
            Clients
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
        </div>

        {/* Main Footer */}
        <div className="footer-main">
          <Link to="/" className="footer-name">
            Manto Kamari
          </Link>
          <p className="footer-tagline">Makeup Artist • Berlin & Greece</p>
        </div>

        {/* Bottom Info */}
        <div className="footer-bottom">
          <span className="copyright">
            © {currentYear} • Available Worldwide
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
