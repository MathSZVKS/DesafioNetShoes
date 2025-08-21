import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import MyWishlist from "./pages/MyWishlist";
import Navbar from './components/Navbar/Navbar.jsx';
import Routebar from './components/Routebar/Routebar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routebar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/wishlist" element={<MyWishlist />} />
      </Routes>
    </Router>
  );
}

export default App;