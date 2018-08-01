import React from 'react';
import { Link } from 'react-router-dom';

import Button from './components/Button';

const Header = () => (
  <header>
    <nav>
      <Link className="navlink" to="/listen">
        <Button className="fill" label="Listen" />
      </Link>
      <Link className="navlink" to="/live">
        <Button className="fill" label="Live" />
      </Link>
      <Link className="navlink" to="/">
        <Button className="fill" label="Home" />
      </Link>
    </nav>
  </header>
);

export default Header;
