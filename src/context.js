import { createContext, useState } from "react";

export const DataContext = createContext();

const MainContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState({});

  const addToCart = (item) => {
    setCart([item, ...cart]);
  };

  const removeFromCart = (item) => {
    let tempCart = cart.filter((product) => product.id !== item.id);
    setCart(tempCart);
  };

  const fetchCategories = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setCategories(data);
  };

  const fetchProducts = async (selectedCategory) => {
    let url = "https://fakestoreapi.com/products/category/" + selectedCategory;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setProducts(data);
  };

  const fetchProduct = async (id) => {
    let url = "https://fakestoreapi.com/products/" + id;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setItem(await res.json());
  };

  return (
    <DataContext.Provider
      value={{
        cart,
        categories,
        products,
        fetchProducts,
        fetchCategories,
        fetchProduct,
        addToCart,
        removeFromCart,
        item,
        setItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default MainContext;
