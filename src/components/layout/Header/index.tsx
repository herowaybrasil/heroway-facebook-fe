import './styles.css';

import React from 'react';

import { ReactComponent as FacebookLogo } from '../../../assets/img/facebook-logo.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <FacebookLogo />
      </div>
    </header>
  );
};

export default Header;
