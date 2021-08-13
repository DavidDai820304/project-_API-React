import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/project-_API-React">
            React & API Studying
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li key="001" className="nav-item">
                <Link className="nav-link" to="/photo">
                  找圖片
                </Link>
              </li>
              <li key="002" className="nav-item">
                <Link className="nav-link" to="/">
                  待定
                </Link>
              </li>
              <li key="003" className="nav-item">
                <Link className="nav-link" to="/">
                  待定
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
