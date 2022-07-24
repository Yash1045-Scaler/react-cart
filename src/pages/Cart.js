import React from "react";
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";

import Categorize from "../components/Categorize";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const {cart} = useSelector(state => state.cartReducer);
  const { selectedCategory } = useParams();
  return (
    <div className="page-container">
      <Categorize/>
      {cart?.filter((item) => item.category === selectedCategory).length ===
      0 ? (
        <div className="page-container__empty">
          <p>Your {selectedCategory} Cart is empty</p>
        </div>
      ) : (
        <div className="page-container__items page-container__items--cart">
          {cart.map(
            (item, i) =>
              item.category === selectedCategory && (
                <ProductCard key={i} item={item}/>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
