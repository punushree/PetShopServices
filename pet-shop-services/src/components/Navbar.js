import React from "react";
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">ICON</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto leftNav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Contact</a>
          </li>
         </ul>
        <ul className="navbar-nav rightNav">
          <li className="nav-item">
            <a className="nav-link" href="#"><i classNameName="fa-solid fa-phone"></i>+91 456789765</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">thisisexample@gmail.com</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Log In</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;

{/* <i classNameName="fa fa-user-plus me-1"></i> */}