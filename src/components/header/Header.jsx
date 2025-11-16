import React from 'react';
import Logo from '../../imgLogo/logo.png';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="inner-header">
        <div className="header-logo">
          <Link to={'/'}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="header-navbar">
          <ul>
            <li>
              <Link to={'/sedan/'}>Легковые</Link>
            </li>
            <li>
              <Link to={'/gruzovoy/'}>Микроавтобусы</Link>
            </li>
            <li>
              <Link to={'/lodka/'}>Лодки</Link>
            </li>
            <li>
              <Link to={'/pricep/'}>Прицепы</Link>
            </li>
          </ul>
        </div>
        <div className="header-number">
          <h3>+375 44 554 75 75</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
