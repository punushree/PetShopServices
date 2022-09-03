import React from "react";
import { Nav } from "react-bootstrap";
import '../App.css';
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="hero homeContainer" id="home">
      <Navbar />
   <div className="homeHeadingContainer">
    <h1 className="homeHeading">Your Best friend <br /> deserves a time off too</h1>
    <h4 className="homeContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h4>
    <button className="homeBtn">
       Explore
    </button>
    </div>
    </div>

    // <div className="hero">
    //     <div className="homeContainer"> Home</div>
    // </div>
  );
};

export default Home;
