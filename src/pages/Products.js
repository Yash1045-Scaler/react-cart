import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import Categorize from "../components/Categorize";

import ProductCard from "../components/ProductCard";
import '../styles/pages/Page-style.scss'

const Products = ({ cart, setCart, categories, setCategories }) => {
  const [products, setProducts] = useState([]);
  const { selectedCategory } = useParams();
  
  useEffect(() => {
    const fetchProducts = async () => {
      let url = "https://fakestoreapi.com/products/category/" + selectedCategory;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setProducts(data);
    }
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
    if (selectedCategory) fetchProducts();
  }, [selectedCategory, setCategories]);

  return (
    // <div className="shopping">
    //   <Categorize categories={categories} selectedCategory={selectedCategory} />
    //   <div className="shopping__items items">
    //     {products.map((item, i) => (
    //       <Item key={i} item={item} cart={cart} setCart={setCart} />
    //     ))}
    //   </div>
    // </div>
    <div className="page-container ">
      <Categorize categories={categories} selectedCategory={selectedCategory} />
      <div className="page-container__items">
        {products.map((item, i) => (
          <ProductCard key={i} item={item} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
