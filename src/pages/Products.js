import React, { useEffect, useContext } from "react";
import { useParams} from "react-router-dom";

import Categorize from "../components/Categorize";
import ProductCard from "../components/ProductCard";
import { DataContext } from "../context";

const Products = () => {
  const { products, categories, fetchCategories, fetchProducts } = useContext(DataContext);
  const { selectedCategory } = useParams();
  
  useEffect(() => {
    fetchCategories();
    if (selectedCategory) fetchProducts(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="page-container ">
      <Categorize />
      <div className="page-container__items">
        {products.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
