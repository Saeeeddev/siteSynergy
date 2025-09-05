import React, { useState, useEffect } from 'react';
import '../../style/Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 370;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header__container ${isScrolled ? 'header__container--scrolled' : ''}`}>
      <div className={`header__wrapper ${isScrolled ? 'header__wrapper--scrolled' : ''}`}>
        {/* Logo Placeholder */}
        <div className="header__logo-placeholder">
          {/* Replace with actual logo */}
          <div className="header__logo-image"> <img src="/src/assets/sitesynergy_logo_white.png" alt="" /></div>
        </div>

        {/* Navigation Menu */}
        <nav className="header__nav-menu">
          <ul className="header__nav-list">
            <li className="header__nav-item">Product</li>
            <li className="header__nav-item">Pricing</li>
            <li className="header__nav-item">Contact</li>
          </ul>
        </nav>

        {/* Actions Section */}
        <div className="header__actions">
          <a href="#" className="header__login-link">Login/Signup</a>
          <button className="header__get-started-btn">Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Header;