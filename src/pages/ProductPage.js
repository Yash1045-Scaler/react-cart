import React ,{useContext} from "react";
import { useParams } from "react-router-dom";
import { useEffect} from "react";

import ProductCard from "../components/ProductCard";
import { DataContext } from "../context";


const ProductPage = () => {
  const {item,fetchProduct} = useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  if (item.id) return (
    <div className="item">
      <ProductCard item={item} />
    </div>
  );
};

export default ProductPage;
