import React from "react";
import { Link } from "react-router-dom";

import Button from "./components/Button";

const Header = () => (
  <header>
    <nav>
      <Link to="/live">
        <Button className="fill" label="Live" />
      </Link>
      <Link to="/">
        <Button className="fill" label="Home" />
      </Link>
    </nav>
  </header>
);

export default Header;
