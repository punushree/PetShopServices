import './App.css';
import Categories from './components/Categories';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import Products from './components/Products';
import AboutUs from './components/AboutUs';



function App() {
  return (
    <div className="App">
      <Home />
      <Products />
      <AboutUs />
      <Categories />
      <Testimonial />
      {/* <Products />
      <Testaments /> */}
    </div>
  );
}

export default App;
