import React from "react";
import { Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";

import Cart from "./pages/Cart";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
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
      
    </Provider>
  );
};

export default App;
