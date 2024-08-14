import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import MobileNav from './components/Navbar/MobileNav';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar />
    <MobileNav />
    <Routes>
    <Route path='/' element={ <Home /> } />
    <Route path='/gallery' element={ <Gallery /> } />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
