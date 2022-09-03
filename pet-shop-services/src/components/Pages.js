import React from 'react';
import AboutUs from './AboutUs';
import Categories from './Categories';
import Footer from './Footer';
import Home from './Home';
import Products from './Products';
import Testimonial from './Testimonial';

const Pages = () => {
    return (
        <div>
            <Home />
            <Products />
            <AboutUs />
            <Categories />
            <Testimonial />
            <Footer />
            
        </div>
    );
};

export default Pages;