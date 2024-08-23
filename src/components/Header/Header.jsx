import { useState } from "react";
import "./Header.css";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  let showMenuStyle = showMenu ? 'show-menu' : '';

  const handleShowMenu = () => {
    setShowMenu(showMenu => !showMenu);
  }

  return (
    <header className="header blur-header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <i className="ri-ancient-gate-line"></i>
          <span>Temple</span>
        </a>

        <div className={`nav__menu ${showMenuStyle}`} id="nav-menu">
          <ul className="nav__list">
            <li>
              <a href="#" className="nav__link" onClick={handleShowMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav__link" onClick={handleShowMenu}>
                Location
              </a>
            </li>
            <li>
              <a href="#" className="nav__link" onClick={handleShowMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav__link" onClick={handleShowMenu}>
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="nav__link" onClick={handleShowMenu}>
                Contact
              </a>
            </li>
          </ul>

          {/* Close button */}
          <div className="nav__close" id="nav-close" onClick={handleShowMenu}>
            <i className="ri-close-large-line"></i>
          </div>
        </div>

        {/* Toggle button */}
        <div className="nav__toggle" id="nav-toggle" onClick={handleShowMenu}>
          <i className="ri-apps-2-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// TODO: Crear funcionalidad para que cuando se haga scroll en la pantalla, el header se convierta en blur (video 21:12)
