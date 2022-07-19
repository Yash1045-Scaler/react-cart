import React, { useEffect, useState } from "react";
import Item from './Item'
import { useParams,Link } from "react-router-dom";

const Products = ({ cart, setCart, category, setcategory }) => {
  const [products, setproducts] = useState([]);
  // const [category, setcategory] = useState([]);
  const { selectedcat } = useParams();
  
  useEffect(() => {
    const fetchProducts = async () => {
      let url = "https://fakestoreapi.com/products/category/" + selectedcat;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setproducts(data);
    }
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setcategory(data);
    };
    fetchData();
    // console.log(selectedcat)
    if (selectedcat) fetchProducts();
  }, [selectedcat, setcategory]);

  return (
    <div className="shopping">
      <div className="shopping__category category">
        {category.map((cat, i) =>
          selectedcat === cat ? (
            <Link
              className="category__name category__name--selected"
              key={i}
              to={`/products/${cat}`}
            >
              <div>{cat}</div>
            </Link>
          ) : (
            <Link className="category__name" key={i} to={`/products/${cat}`}>
              <div>{cat}</div>
            </Link>
          )
        )}
      </div>
      <div className="shopping__items items">
        {products.map((item, i) => (
          <Item key={i} item={item} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
