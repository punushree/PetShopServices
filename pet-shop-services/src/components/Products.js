import React from "react";

const Products = () => {
  return (
    <div className="productsContainer">
      <div className="productContentContainer">
        <img
          src="./assests/blueBg.jpg"
          class="productMainImage"
          alt="background"
          height="500px"
        />
        <div className="carouselContainer">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active carouselCont">
               home
              </div>
              <div class="carousel-item carouselContTwo">
                Page 2
              </div>
              <div class="carousel-item carouselCont">
                Page 3
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
