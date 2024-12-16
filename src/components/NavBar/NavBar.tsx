import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="./src/assets/logo.png" alt="Logo" className="logo" />
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
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Stoque</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Soluções</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mercados</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Conteúdos</a>
            </li>
            <li className="nav-item d-lg-none">
              <a href="#" className="btn btn-lime">Fale com a gente</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto d-none d-lg-flex">
            <li className="nav-item">
              <a href="#" className="btn btn-lime">Fale com a gente</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;




