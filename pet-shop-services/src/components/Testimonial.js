import React, { useEffect } from "react";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";

/**
 * Added contents & animation
 */

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div data-aos="fade-down" className="testimonialSection">
      <div className="testimonialContainer">
        <div className="testimonialContent-section">
          <div className="title">Our Latest Blog</div>
          <div className="aboutContent">
            <h3 className="aboutHeading">
              Which One Is The Best For Your Pet Bird?
            </h3>
            <p>
              Birds need a safe space to live, eat, play, and rest. As a proud
              bird owner, it becomes your duty to provide adequate living space
              for your avian friend.{" "}
            </p>
            <p>
              Obviously, birdcages would serve as that safe space. But they come
              in so many models, colors, and sizes. It can become quite
              overwhelming to decide the right fit for your bird.{" "}
            </p>
            <p>
              There’s no wrong choice choosing either of these bird cage styles.
              Your preference would depend on aesthetics and practicality and of
              course what would best suit the species of bird you have.{" "}
            </p>

            <div className="testimonialSocials">
              <a href="">
                {" "}
                <i className="fa fa-facebook"></i>{" "}
              </a>
              <a href="">
                {" "}
                <i className="fa fa-twitter"></i>{" "}
              </a>
              <a href="">
                {" "}
                <i className="fa fa-instagram"></i>{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="testimonialImage-section">
          <img
            src="./assests/birdImg.jpg"
            className="productImageContainer"
            alt="background"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
