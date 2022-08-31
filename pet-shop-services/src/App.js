import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Products />
    </div>
  );
}

export default App;
