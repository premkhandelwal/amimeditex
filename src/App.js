import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Client from './components/Clients/clients';
import ImageCarousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Products/>
      <Client/>
      <ImageCarousel/>
      <Footer/>
    </div>
  );
}

export default App;
