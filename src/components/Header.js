import React from "react";
import { useEffect } from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { NavLink, useNavigate, useLocation} from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCategory = location.pathname.split("/")[2];
  const page = location.pathname.split("/")[1];
  useEffect(() => {
    if (location.pathname === "/") navigate("/products/electronics");
  }, [navigate, location.pathname]);
  return (
    <nav className="header">
      <span className="header__brand">Shopping Cart</span>
      <div className="header__option option">
        <NavLink
          className="option__nav option__nav--home"
          to={`/products/${selectedCategory}`}
        >
          <FaHome
            color={
              page === "products" ? "black" : "white"
            }
            fontSize="25px"
          />
        </NavLink>
        <NavLink
          className="option__nav option__nav--cart"
          to={`/cart/${selectedCategory}`}
        >
          <FaShoppingCart
            color={
              page === "cart" ? "black" : "white"
            }
            fontSize="25px"
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
