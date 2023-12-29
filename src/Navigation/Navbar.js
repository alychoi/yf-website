import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import injectSheet from "react-jss";
import "./Navbar.css";
import "@fontsource/bubblegum-sans"; // Defaults to weight 400
import "@fontsource/bubblegum-sans/400.css"; // Specify weight


const styles = {
    Navbar: {
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "5",
    },
    navbarBrand: {
        marginLeft: "20px",
        marginRight: "10px",
        textDecoration: "none",
        color: "black",
        fontSize: "40px",
        fontFamily: 'Bubblegum Sans',
    }
}

const Navbar = ({classes}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleToggle() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className={classes.Navbar}>
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#b6ffbd"}}>
      <a className={classes.navbarBrand} id="brand" href="#">
        Yewniik Friends
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggle}
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNavDropdown" style={{paddingLeft: "20px"}}>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
                <NavLink className="nav-element" to='/home' onClick={handleToggle}>
                    Home 
                </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <NavLink className="nav-element" to='/about' onClick={handleToggle}>
                    About
                </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <NavLink className="nav-element" to='/learn' onClick={handleToggle}>
                    Learn
                </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <NavLink className="nav-element" to='/merch' onClick={handleToggle}>
                    Merch
                </NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default injectSheet(styles)(Navbar);