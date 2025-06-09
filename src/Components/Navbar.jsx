import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = (e) => {
    setShowMenu(false);
    if (e) {
      e.stopPropagation();
    }
  };

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close if menu is open and click is outside both menu and toggle button
      if (
        showMenu &&
        menuRef.current &&
        toggleRef.current &&
        !menuRef.current.contains(event.target) &&
        !toggleRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    // Add event listener when menu is open
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMenu]);

  return (
    <div className="navbar-container">
      <div className={`links-container ${showMenu ? "show" : ""}`}>
        <div className="menu-toggle" onClick={toggleMenu} ref={toggleRef}>
          {!showMenu ? (
            <>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </>
          ) : (
            <FontAwesomeIcon className="close-icon" icon={faTimes} />
          )}
        </div>
        <div className={`menu-items ${showMenu ? "show" : ""}`} ref={menuRef}>
          <Link className="links" to="/" onClick={closeMenu}>
            HOME
          </Link>
          <Link className="links" to="/gallery" onClick={closeMenu}>
            GALLERY
          </Link>
          <Link className="links" to="/clients" onClick={closeMenu}>
            CLIENTS
          </Link>
          <Link className="links" to="/about" onClick={closeMenu}>
            ABOUT ME
          </Link>
        </div>
      </div>

      {showMenu && <div className="menu-overlay" onClick={closeMenu} />}
    </div>
  );
}

export default Navbar;
