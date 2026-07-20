import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  // Matches the navbar's behavior: Link only scrolls on route change, so
  // clicking this while already on "/" needs its own explicit scroll.
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="footer-content">
        {/* Quick Navigation */}
        <div className="footer-nav">
          <Link to="/gallery" className="footer-link">
            Gallery
          </Link>

          <Link to="/about" className="footer-link">
            About
          </Link>

          <a href="mailto:mantwkamari@gmail.com" className="footer-link">
            Contact
          </a>

          <a
            href="https://www.instagram.com/mantokamarimakeupartist/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
          </a>
        </div>

        {/* Main Footer */}
        <div className="footer-main">
          <Link to="/" className="footer-name" onClick={handleHomeClick}>
            Manto Kamari
          </Link>
          <p className="footer-tagline">
            Makeup & Hair Stylist · Berlin & Greece · Available Worldwide
          </p>
        </div>

        {/* Bottom Info */}
        <div className="footer-bottom">
          <span className="copyright">
            © {currentYear} Manto Kamari. All Rights Reserved.
          </span>
          <a
            href="https://www.chaptersbyanastasia.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit"
          >
            Design & Development by Anastasia Tsapanidou Kornilaki
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
