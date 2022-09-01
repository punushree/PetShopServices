import React from "react";
import "../App.css";

const Testaments = () => {
  return (
    <div className="testamentContainer">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="cardBody">
              <div>
              <img src="./assests/women1.jpg" className="imageContainer" alt="background"/>
              </div>
             <div className="cardContent">
              <h1 className="title">Hello</h1>
              <h4 className="h4heading">he industry's standard dummy text ever since the 1500s, when an unknown printer </h4>
             </div>
           
            </div>
          </div>
          <div className="col">
            <div className="cardBody">
            <div>
              <img src="./assests/women2.jpg" className="imageContainer" alt="background"/>
              </div>
             <div className="cardContent">
              <h1 className="title">Hello</h1>
              <h4 className="h4heading">he industry's standard dummy text ever since the 1500s, when an unknown printer </h4>
             </div>
            </div>
          </div>
          <div className="col">
            <div className="cardBody">
            <div>
              <img src="./assests/man1.jpg" className="imageContainer" alt="background"/>
              </div>
             <div className="cardContent">
              <h1 className="title">Hello</h1>
              <h4 className="h4heading">he industry's standard dummy text ever since the 1500s, when an unknown printer </h4>
              
             </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testaments;
