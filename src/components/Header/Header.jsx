import React, { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

function Header() {
  

  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleBtn = () => {
      setToggleMenu(!toggleMenu);
    
  }

  return (
    <div className="header-container">
      <div className="header-wrapper">
        <h3>
          <Link to="/">swaGGiest</Link>
        </h3>

          
        <ul className={`${toggleMenu ? "mobile-menu" : ""} menu`}
                onClick={() => toggleBtn()}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button onClick={() => toggleBtn()} className='btn-menu'>Menu</button>

      </div>
    </div>
  );
}

export default Header;
