import React from "react";
import "../App.css";

const Testimonial = () => {
  return (
    <div className='testimonialSection'>
    <div className='testimonialContainer'>
      <div className='testimonialContent-section'>
        <div className='title'>Our Latest Blog</div>
        <div className='aboutContent'>
          <h3 className='aboutHeading'>Lorem Ipsum</h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since <br /> when an unknown printer took a galley of type and scrambled it <br /> to make a type specimen book. It has survived not only five centuries, </p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since <br /> when an unknown printer took a galley of type and scrambled it <br /> to make a type specimen book. It has survived not only five centuries, </p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since <br /> when an unknown printer took a galley of type and scrambled it <br /> to make a type specimen book. It has survived not only five centuries, </p>
          
         
         <div className='testimonialSocials'>
          <a href=''> <i className='fa fa-facebook'></i> </a>
          <a href=''> <i className='fa fa-twitter'></i> </a>
          <a href=''> <i className='fa fa-instagram'></i> </a>
         </div>
        </div>
      </div>

      <div className='testimonialImage-section'>
      <img src="./assests/birdImg.jpg" className="productImageContainer" alt="background"/>
      </div>
    </div>
   </div>
  );
};

export default Testimonial;
