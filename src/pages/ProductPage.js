import React from "react";
import { useParams } from "react-router-dom";
import { useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';

import ProductCard from "../components/ProductCard";
import { updateProduct } from "../store/product";


const ProductPage = () => {
  const {product} = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(updateProduct(id));

    return () => {
      dispatch(updateProduct("empty"));
    }
  }, [id]);

  if (product?.id) return (
    <div className="item">
      <ProductCard item={product} />
    </div>
  );
};

export default ProductPage;
