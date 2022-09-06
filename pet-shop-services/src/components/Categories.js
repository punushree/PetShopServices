import React from 'react';

const Categories = () => {
    return (
        <div className="categorySection text-center" id='categories'>
          <h1>What Do We Offer?</h1>
          <div className='categoryContainer'>
            <div className='categoryContent-section'>
             <div className='categoryCardContainer'>
              <div className='categoryCard'>
                <div className='productTextContainer'>
                  <h2>Massages</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  sed do eiusmod tempor incididunt ut labore et dolore  sed do eiusmod tempor incididunt ut labore et dolore </p>
                <button type="button" class="btn btn-outline-info aboutBtn">Explore</button>
                </div>
             
              </div>
              <div className='categoryCard'>
                <div  className="productImageContainer">
                
                </div>
             
              </div>
              <div className='categoryCard'>
              <div className='productTextContainerTwo'>
                  <h2>Massages</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  sed do eiusmod tempor incididunt ut labore et dolore  sed do eiusmod tempor incididunt ut labore et dolore </p>
                <button type="button" class="btn btn-outline-info aboutBtn">Explore</button>
                </div>
              </div>
             </div>
             <div className='categoryCardContainer'>
              <div className='categoryCard'>
              <div  className="productImageContainerTwo"> </div>
              </div>
              <div className='categoryCard'>
              <div className='productTextContainerThree'>
                  <h2>Massages</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  sed do eiusmod tempor incididunt ut labore et dolore  sed do eiusmod tempor incididunt ut labore et dolore </p>
                <button type="button" class="btn btn-outline-info aboutBtn">Explore</button>
                </div>
              </div>
              <div className='categoryCard'>
              <div  className="productImageContainerThree"> </div>
              </div>
             </div>
          
             </div>
             
          </div>
        </div>
    );
}

export default Categories;