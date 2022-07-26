import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Categorize from "../components/Categorize";
import ProductCard from "../components/ProductCard";

const Cart = ({
  cart,
  setCart,
  categories,
  setCategories,
}) => {
  const { selectedCategory } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCategories(data);
    };
    fetchData();
  }, [selectedCategory, setCategories]);
  return (
    <div className="page-container">
      <Categorize categories={categories} selectedCategory={selectedCategory} />
      {cart.filter((item) => item.category === selectedCategory).length ===
      0 ? (
        <div className="page-container__empty">
          <p>Your {selectedCategory} Cart is empty</p>
        </div>
      ) : (
        <div className="page-container__items page-container__items--cart">
          {cart.map(
            (item, i) =>
              item.category === selectedCategory && (
                <ProductCard key={i} item={item} cart={cart} setCart={setCart} />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
