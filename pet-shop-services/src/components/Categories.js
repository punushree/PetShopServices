import React from 'react';

const Categories = () => {
    return (
        <div className="categorySection">
          <div className='categoryContainer'>
            <div className='categoryContent-section'>
             <div className='categoryCardContainer'>
              <div className='categoryCard'>
              <p className='productTextContainer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  sed do eiusmod tempor incididunt ut labore et dolore  sed do eiusmod tempor incididunt ut labore et dolore </p>
              </div>
              <div className='categoryCard'>
              <img src="./assests/catImg.jpg" className="productImageContainer" alt="background"/>
              </div>
              <div className='categoryCard'>
              <p className='productTextContainerTwo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  sed do eiusmod tempor incididunt ut labore et dolore </p>
              </div>
             </div>
             <div className='categoryCardContainer'>
              <div className='categoryCard'>
              <img src="./assests/dogBackground.jpg" className="productImageContainer" alt="background"/>
              </div>
              <div className='categoryCard'>
              <p className='productTextContainerThree'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  sed do eiusmod tempor incididunt ut labore et dolore sed do eiusmod tempor incididunt ut labore et dolore</p>
              </div>
              <div className='categoryCard'>
              <img src="./assests/birdImg.jpg" className="productImageContainer" alt="background"/>
              </div>
             </div>
          
             </div>
             
          </div>
        </div>
    );
}

export default Categories;