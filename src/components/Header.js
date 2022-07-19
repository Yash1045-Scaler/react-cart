import React from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { BiHomeSmile } from "react-icons/bi";

const Header = ({ page,setPage }) => {
  return (
    <nav className="header">
      <div className="header__nav nav">
        <span className="nav__brand">Shopping Cart</span>
        <div className="nav__opt opt">
          <div className="opt__home" onClick={() => setPage("products")}>
            {page === "products" ? (
              <FaHome color="black" fontSize="25px" />
            ) : (
              <FaHome color="white" fontSize="25px" />
            )}
          </div>
          <div className="opt__cart" onClick={() => setPage("cart")}>
            {page === "cart" ? (
              <FaShoppingCart color="black" fontSize="25px" />
            ) : (
              <FaShoppingCart color="white" fontSize="25px" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
