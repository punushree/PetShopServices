import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

/**
 * Added contents & animation
 */

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div data-aos="fade-down" className="section" id="AboutUs">
      <div className="container">
        <div className="content-section">
          <div className="title">Know More About Us</div>
          <div className="aboutContent">
            <h3 className="aboutHeading">
              Making Pet Parenting Pretty Amazing
            </h3>
            <p>
              We come from a place of great love for pets! From our founders and
              teammates to our expert vets and certified caregivers, everyone on
              our team is profoundly in love with humankind’s cutesy companions.{" "}
            </p>
            <p>
              Whether you’re a new pet parent or an experienced one, we’re here
              to make your pet parenting journey truly amazing with direct
              access to consistent, compassionate, and affordable pet care.{" "}
            </p>
            <p>
              Whatever you need - grooming products, or a piece of friendly
              advice for your BFFs - we’re at your service, all paws in!{" "}
            </p>

            <button type="button" class="btn btn-outline-info aboutBtn">
              Info
            </button>
            <div className="socials">
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

        <div className="image-section">
          <img
            src="./assests/dogBackground.jpg"
            className="productImageContainer"
            alt="background"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
