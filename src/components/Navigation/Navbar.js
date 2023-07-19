import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/assets/Frame.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
