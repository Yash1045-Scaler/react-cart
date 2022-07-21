import React, { useState } from "react";
import { Routes,Route } from "react-router-dom";

import Cart from "./pages/Cart";
import Header from "./components/Header";
import MainContext from "./context";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products";

const App = () => {
  return (
    <MainContext>
      <Header />

      <Routes>
        <Route
          path="/products/:selectedCategory"
          element={
            <Products
            />
          }
        />
        <Route
          path="/cart/:selectedCategory"
          element={
            <Cart
            />
          }
        />
        <Route path="products/:selectedCategory/:id" element={<ProductPage/>} />
      </Routes>
      
    </MainContext>
  );
};

export default App;
