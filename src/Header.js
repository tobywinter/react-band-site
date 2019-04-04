import React from "react";
import { Link } from "react-router-dom";

import Button from "./components/Button";

const Header = () => (
  <header>
    <nav>
      <a
        className="navlink"
        href="https://yawwn.bandcamp.com/merch/yawwn-tshirt"
      >
        <Button className="fill" label="Merch" />
      </a>
      <Link className="navlink" to="/listen">
        <Button className="fill" label="Listen" />
      </Link>
      <Link className="navlink" to="/">
        <Button className="fill" label="Home" />
      </Link>
    </nav>
  </header>
);

export default Header;
