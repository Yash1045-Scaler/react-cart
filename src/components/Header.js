import React from "react";
import { useEffect } from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { NavLink, useNavigate, useLocation, } from "react-router-dom";

const Header = ({ page, setPage }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') navigate("/products/electronics");
    }, [navigate, location.pathname]);

    return (
      <nav className="header">
        <div className="header__nav nav">
          <span className="nav__brand">Shopping Cart</span>
          <div className="nav__opt opt">
            <NavLink
              className="opt__home"
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
              className="opt__cart"
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
        </div>
      </nav>
    );
};

export default Header;
