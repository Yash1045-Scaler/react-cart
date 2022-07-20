import React, { useState } from "react";
import { Routes,Route } from "react-router-dom";

import Cart from "./pages/Cart";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products";

const App = () => {
  const [page, setPage] = useState("products");
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);


  return (
    <div>
      <Header setPage={setPage} page={page} />

      <Routes>
        <Route
          path="/products/:selectedCategory"
          element={
            <Products
              cart={cart}
              setCart={setCart}
              categories={categories}
              setCategories={setCategories}
            />
          }
        />
        <Route
          path="/cart/:selectedCategory"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              categories={categories}
              setCategories={setCategories}
            />
          }
        />
        <Route path="products/:selectedCategory/:id" element={<ProductPage cart={cart} setCart={setCart}/>} />
      </Routes>
      
    </div>
  );
};

export default App;
