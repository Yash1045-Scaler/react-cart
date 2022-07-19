import React, { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { Routes,Route } from "react-router-dom";
import ItemPage from "./components/ItemPage";

const App = () => {
  const [page, setPage] = useState("products");
  const [selectedcat, setselectedcat] = useState("");
  const [cart, setCart] = useState([]);
  const [category, setcategory] = useState([]);


  return (
    <div>
      <Header setPage={setPage} page={page} />

      <Routes>
        <Route
          path="/products/:selectedcat"
          element={
            <Products
              cart={cart}
              setCart={setCart}
              category={category}
              setcategory={setcategory}
            />
          }
        />
        <Route
          path="/cart/:selectedcat"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              category={category}
              setcategory={setcategory}
            />
          }
        />
        <Route path="products/:selectedcat/:id" element={<ItemPage cart={cart} setCart={setCart}/>} />
      </Routes>
      
    </div>
  );
};

export default App;
