import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Categories = () => {
  /**
   * Added contents & animation
   */

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div
      data-aos="fade-down"
      className="categorySection text-center"
      id="categories"
    >
      <h1>What Do We Offer?</h1>
      <div className="categoryContainer">
        <div className="categoryContent-section">
          <div className="categoryCardContainer">
            <div className="categoryCard">
              <div className="productTextContainer">
                <h2>Massages</h2>
                <p>
                  Learn to massage your pet. Pet Care helps young pets develop
                  and stay healthy, senior pets stay vital, flexible, and
                  playful, and all epts become more healthy and balanced.{" "}
                </p>
                <button type="button" class="btn btn-outline-info aboutBtn">
                  Explore
                </button>
              </div>
            </div>
            <div className="categoryCard">
              <div className="productImageContainer"></div>
            </div>
            <div className="categoryCard">
              <div className="productTextContainerTwo">
                <h2>Groomings</h2>
                <p>
                  Upon assessing your dog’s skin & coat our groomers use
                  suitable products, ensuring that it leaves with a clean coat &
                  ears, and trimmed paws.{" "}
                </p>
                <button type="button" class="btn btn-outline-info aboutBtn">
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div className="categoryCardContainer">
            <div className="categoryCard">
              <div className="productImageContainerTwo"> </div>
            </div>
            <div className="categoryCard">
              <div className="productTextContainerThree">
                <h2>Trainings</h2>
                <p>
                  Our pet training program is designed for busy pet owners who
                  are committed to training their pet into well-adjusted adult
                  pets. It works from the comfort of your home, or on your phone
                  during your lunch break.{" "}
                </p>
                <button type="button" class="btn btn-outline-info aboutBtn">
                  Explore
                </button>
              </div>
            </div>
            <div className="categoryCard">
              <div className="productImageContainerThree"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
