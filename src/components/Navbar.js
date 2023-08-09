import React from "react";
import { Link } from "react-router-dom";
import lgu_yds_logo from "../images/lgu_yds_logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-success">
        <div class="container">
          {/* <a class="navbar-brand" href="#">
            <img src={lgu_yds_logo} alt="" class="navbar__logo" />
          </a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link  text-light" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link text-light" to="/mypdc">
                  MYDC
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sangguniang-kabataan"
                  className="nav-link text-light"
                >
                  Sangguniang Kabataan
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/youth-section" className="nav-link text-light">
                  Youth Section
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
