import React, { useEffect, useState } from "react";
import Item from './Item'

const Products = ({setselectedcat,selectedcat, cart, setCart,category,setcategory}) => {
  const [products, setproducts] = useState([]);
  // const [category, setcategory] = useState([]);
  
  
  const fetchProducts = async (category) => {
    let url = "https://fakestoreapi.com/products/category/"+category;
    const res = await fetch(url ,{
        method:"GET",
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
    if(selectedcat.length === 0){
        setselectedcat(data[0]);
    }
    if(selectedcat) fetchProducts(selectedcat);
  };
  
  useEffect(() => {
    fetchData();
  }, [selectedcat]);
  
  return (
    <div className="shopping">
      <div className="shopping__category category">
        {category.map((cat, i) =>
          selectedcat === cat ? (
            <div className="category__name category__name--selected" onClick={()=>{setselectedcat(cat);fetchProducts(cat);}} key={i}>
              {cat}
            </div>
          ) : (
            <div className="category__name" onClick={()=>{setselectedcat(cat);fetchProducts(cat);}} key={i}>{cat}</div>
          )
        )}
      </div>
      <div className="shopping__items items">
        {products.map((item,i) => <Item key={i} item={item} cart={cart} setCart={setCart}/>
        )}
      </div>
    </div>
  );
};

export default Products;
