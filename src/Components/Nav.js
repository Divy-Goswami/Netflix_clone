import React, { useEffect, useState } from "react";
import "../style/Nav.css";

const logo = "C:\Users\divy\Downloads\kashipara.com_netflix-zip\netflix\public\logo192.png"

const Nav = () => {
  const [show, handleShow] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src={logo}
        alt="Netflix Logo"
      />
      <img
        className="nav_avtar"
        src="C:\Users\divy\Downloads\kashipara.com_netflix-zip\netflix\public\logo192.png"
        alt="netflix logo Avtar"
      />
    </div>
  );
};

export default Nav;
