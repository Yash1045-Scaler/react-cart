import React from "react";
import { useEffect } from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { NavLink, useNavigate, useLocation} from "react-router-dom";

import '../styles/components/Header.scss'

const Header = ({ page, setPage }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') navigate("/products/electronics");
    }, [navigate, location.pathname]);

    return (
      <nav className="header">
        
          <span className="header__brand">Shopping Cart</span>
          <div className="header__option option">
            <NavLink
              className="option__nav option__nav--home"
              to={`/products/${location.pathname.split("/")[2]}`}
            >
              <FaHome
                color={
                  location.pathname.split("/")[1] === "products"
                    ? "black"
                    : "white"
                }
                fontSize="25px"
              />
            </NavLink>
            <NavLink
              className="option__nav option__nav--cart"
              to={`/cart/${location.pathname.split("/")[2]}`}
            >
              <FaShoppingCart
                color={
                  location.pathname.split("/")[1] === "cart" ? "black" : "white"
                }
                fontSize="25px"
              />
            </NavLink>
          </div>
        
      </nav>
    );
};

export default Header;
