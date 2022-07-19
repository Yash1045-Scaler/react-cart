import React, {useState} from 'react'
import Header from './components/Header'
import Products from './components/Products';
import Cart from './components/Cart';

const App = () => {
  const [page, setPage] = useState("products");
  const [selectedcat, setselectedcat] = useState("");
  const [cart, setCart] = useState([]);
  
  return (
    <div>
      <Header setPage={setPage}/>
      {
        page === "products" ?  
          <Products setselectedcat={setselectedcat} selectedcat={selectedcat} cart={cart} setCart={setCart}/> 
        : 
          <Cart setselectedcat={setselectedcat} selectedcat={selectedcat} cart={cart} setCart={setCart}/>
      }
    </div>
  )
}

export default App