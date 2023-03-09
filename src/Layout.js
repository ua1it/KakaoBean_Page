import { React, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "@fortawesome/fontawesome-free";
import "./Layout.css";
import Brand from "./images/bean.png";

export default function Layout() {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" style={{textDecoration:"none"}}>
          <div>
            <img className="logo" src={Brand} />
            <h1 className="navbar-logo">KakaoBean</h1>
          </div>
        </Link>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <i className={showNavbar ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className="nav-elements">
          <ul className={showNavbar ? "nav-elements active" : "nav-elements"}>
            <li>
              <a href="/vision" className="nav-links">
                Vision
              </a>
            </li>
            <li>
              <a href="/team" className="nav-links">
                Team
              </a>
            </li>
            <li>
              <a href="/custom" className="nav-links">
                Custom
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}
