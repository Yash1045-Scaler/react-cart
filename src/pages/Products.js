import React, { useEffect} from "react";
import { useParams} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";


import Categorize from "../components/Categorize";
import ProductCard from "../components/ProductCard";
import { updateProducts } from "../store/products";
import { updateCategories } from "../store/categories";

const Products = () => {
  const { products, categories } = useSelector(state => ({...state.productsReducer, ...state.categoriesReducer}));
  const { selectedCategory } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(categories.length === 0)dispatch(updateCategories());
    if (selectedCategory) dispatch(updateProducts(selectedCategory));
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
