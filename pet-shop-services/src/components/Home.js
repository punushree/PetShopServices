import React from "react";
import '../App.css';

const Home = () => {
  return (
    <div className="hero homeContainer">
    <div class="card text-bg-dark text-dark border-0">
      <img src="./assests/blueBg.jpg" class="card-img" alt="background" height="650px" />
      <div class="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container">
        <h5 class="card-title display-4 fw-bolder mb-0 heading">Find Latest Trends Here</h5>
        <p class="card-text lead fs-4 heading">
          Here you will find the best accesories for your pets, happy shopping !
         
        </p>
        <p class="card-text lead fs-4">
          Here you will find the best accesories for your pets, happy shopping !
        </p>
        
        
        </div>
        <div className="homeBtnContainer">
        <button type="button" class="btn btn-outline-light">Light</button>
        </div>
        
      </div>
    </div>
    </div>

    // <div className="hero">
    //     <div className="homeContainer"> Home</div>
    // </div>
  );
};

export default Home;
