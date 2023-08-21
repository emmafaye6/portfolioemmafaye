import moonicon from "../../assets/images/moonicon.svg";
import sunicon from "../../assets/images/sunicon.svg";
import "./header.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/themeContext";

function Header() {
  const location = useLocation();
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleCloseLinks = () => {
    setShowLinks(false);
  };

  const showAllLinks = location.pathname === "/";

  // DARK MODE TOGGLE
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <Link to="/" className="header__title">
        {"{"} emma faye {"}"}
      </Link>
      <div className="header__links header__text">
        {showAllLinks ? ( // Conditionally render links based on the location
          <>
            <a href="#about" onClick={handleCloseLinks}>
              <span className="--regular">01.</span> about
            </a>
            <a href="#projects" onClick={handleCloseLinks}>
              <span className="--regular">02.</span> projects
            </a>
            <a href="#meta" onClick={handleCloseLinks}>
              <span className="--regular">03.</span> something meta
            </a>
            <a href="#contact" onClick={handleCloseLinks}>
              <span className="--regular">04.</span> contact
            </a>
          </>
        ) : (
          <Link to="/" onClick={handleCloseLinks}>
            <span className="--regular">01.</span> home
          </Link>
        )}
      </div>
      <div className="header__rightcontainer">
        <button
          className="header__burger"
          onClick={handleShowLinks}
          aria-label="hamburger menu"
          aria-haspopup="menu"
        >
          <span className="burger__bar"></span>
        </button>
        <button onClick={toggleTheme}>
          <img
            src={theme === "light" ? moonicon : sunicon}
            alt={theme}
            className={theme === "light" ? "moonicon" : "sunicon"}
          />
        </button>
      </div>
    </nav>
  );
}

export default Header;
