import React from "react";
import { useParams } from "react-router-dom";
import { useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';

import ProductCard from "../components/ProductCard";
import { updateProduct } from "../store/product";
import { productDataSelector } from "../selectors/product";


const ProductPage = () => {
  const {product} = useSelector(productDataSelector);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(updateProduct(id));

    return () => {
      dispatch(updateProduct("empty"));
    }
  }, [id]);

  if (product.id) {
    return (
      <div className="item">
        <ProductCard item={product} />
      </div>
    );
  } else {
    return null;
  }
};

export default ProductPage;
