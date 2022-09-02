import React from "react";
import { Nav } from "react-bootstrap";
import '../App.css';
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="hero homeContainer">
      <Navbar />
   <div className="homeHeadingContainer">
    <h1 className="homeHeading">Your Best friend <br /> deserves best stuff</h1>
    <h4 className="homeContent">It was popularised in the 1960s with the release of Letraset sheets containing </h4>
    <button className="homeBtn">
        Shop Now
    </button>
    </div>
    </div>

    // <div className="hero">
    //     <div className="homeContainer"> Home</div>
    // </div>
  );
};

export default Home;
