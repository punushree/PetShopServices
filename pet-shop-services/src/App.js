import './App.css';
import Categories from './components/Categories';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Testaments from './components/Testaments';
import Products from './components/Products';
import Blogs from './components/Blogs';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Categories />
      <Products />
      <Testaments />
      <Products />
      <Blogs />
    </div>
  );
}

export default App;
