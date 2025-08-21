import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"; 
import { FaUser } from "react-icons/fa"; 
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const isWishlistPage = location.pathname === "/wishlist";
  const dynamicLink = isWishlistPage ? "/" : "/wishlist";
  const dynamicText = isWishlistPage ? "Produtos" : "Lista de desejos";

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <Link to="/">
          <img src="/logo.svg" alt="Logo" />
        </Link>
      </div>
      <div className="navbarLinks">
        <Link to={dynamicLink} className="navbarLink">
          {isWishlistPage ? <AiOutlineShoppingCart size={20} /> : <AiOutlineHeart size={20} />}
          {dynamicText}
        </Link>
        <div className="userIconWrapper" onClick={toggleDropdown}>
          <FaUser className="userIcon" />
          {isDropdownOpen && (
            <div className="dropdownMenu">
              <Link>Entrar</Link>
              <Link>Minha Conta</Link>
              <Link>Endereços</Link>
              <Link>Minha Netshoes</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
