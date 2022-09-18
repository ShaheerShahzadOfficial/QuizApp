import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {userDispatch,useSelector} from "react-redux"
function NavBar() {
  const [click, setClick] = useState(false);

const {user} = useSelector(state => state.Auth)

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        {user ?
        <div className="nav-container">
          <NavLink  to="/" className="nav-logo">
            Hotel Web
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/room"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Rooms
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ContactUs"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>: 
        
        <div className="nav-container">
          <NavLink  to="/" className="nav-logo">
            Hotel Web
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/room"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Rooms
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ContactUs"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          
          
            <li className="nav-item">
              <NavLink
                to="/login"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>}
      </nav>
    </>
  );
}

export default NavBar;