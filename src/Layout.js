import {React, useState} from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css'

export default function Layout() {

  const [showNavbar, setShowNavbar] = useState(true);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  return (
      <nav className="navbar">
        <div className="container">
          <div className={`nav-elements ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/vision">Vision</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/custom">Custom</Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </nav>
      
  );
}
