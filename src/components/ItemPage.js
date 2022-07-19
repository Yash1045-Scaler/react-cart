import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const ItemPage = ({ cart, setCart }) => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchitem = async () => {
      let url = "https://fakestoreapi.com/products/" + id;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setItem(await res.json());
    };
    fetchitem();
  }, [id]);

  if (item.id) return (
    
  <ProductCard item={item} cart={cart} setCart={setCart} />
  );
  else return <div> Loading...</div>;
};

export default ItemPage;
