import React from 'react';

const AboutUs = () => {
    return (
     <div className='section'>
      <div className='container'>
        <div className='content-section'>
          <div className='title'>Know More About Us</div>
          <div className='aboutContent'>
            <h3 className='aboutHeading'>Lorem Ipsum has been the industry's standard dummy text ever since</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since <br /> when an unknown printer took a galley of type and scrambled it <br /> to make a type specimen book. It has survived not only five centuries, </p>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since <br /> when an unknown printer took a galley of type and scrambled it <br /> to make a type specimen book. It has survived not only five centuries, </p>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since <br /> when an unknown printer took a galley of type and scrambled it <br /> to make a type specimen book. It has survived not only five centuries, </p>
            
           <button type="button" class="btn btn-outline-info aboutBtn">Info</button>
           <div className='socials'>
            <a href=''> <i className='fa fa-facebook'></i> </a>
            <a href=''> <i className='fa fa-twitter'></i> </a>
            <a href=''> <i className='fa fa-instagram'></i> </a>
           </div>
          </div>
        </div>

        <div className='image-section'>
        <img src="./assests/dogBackground.jpg" className="productImageContainer" alt="background"/>
        </div>
      </div>
     </div>

    );
}

export default AboutUs;