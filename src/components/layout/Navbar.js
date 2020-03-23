import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              MovieDetails
            </Link>

            <Link className="navbar-brand  text-white text-lg " to="/">
              Register
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i
                className="fab fa-imdb fa-5x"
                id="imdb-logo"
                Link
                to="https://www.imdb.com/"
              />
            </li>
          </ul>

          <Link className="navbar-brand  text-white text-lg " to="/">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
