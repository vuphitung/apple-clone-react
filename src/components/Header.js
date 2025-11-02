import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="menu-bar">
        <div className="nav-container">
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="logo">
            <i className="ri-apple-fill"></i>
          </div>

          <ul className="nav-links">
            <li><a href="/">Cửa Hàng</a></li>
            <li><a href="/">Mac</a></li>
            <li><a href="/">iPad</a></li>
            <li><a href="/">iPhone</a></li>
            <li><a href="/">Watch</a></li>
            <li><a href="/">AirPods</a></li>
            <li><a href="/">TV & Nhà</a></li>
            <li><a href="/">Giải Trí</a></li>
            <li><a href="/">Phụ Kiện</a></li>
            <li><a href="/">Hỗ Trợ</a></li>
          </ul>

          <div className="nav-icons">
            <div className="item"><i className="ri-search-line"></i></div>
            <a href="/" className="item"><i className="ri-shopping-bag-line"></i></a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`nav-links-mobile ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
      >
        <ul onClick={(e) => e.stopPropagation()}>
          <li><a href="/">Cửa Hàng</a></li>
          <li><a href="/">Mac</a></li>
          <li><a href="/">iPad</a></li>
          <li><a href="/">iPhone</a></li>
          <li><a href="/">Watch</a></li>
          <li><a href="/">AirPods</a></li>
          <li><a href="/">TV & Nhà</a></li>
          <li><a href="/">Giải Trí</a></li>
          <li><a href="/">Phụ Kiện</a></li>
          <li><a href="/">Hỗ Trợ</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
