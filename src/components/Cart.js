import React from "react";
import Item from './Item'
import { Link,useParams } from "react-router-dom";


const Cart = ({
  cart,
  setCart,
  category,
  setcategory,
}) => {
  const { selectedcat } = useParams();
  return (
    <div className="shopping">
      <div className="shopping__category category">
        {category.map((cat, i) =>
          selectedcat === cat ? (
            <Link
              className="category__name category__name--selected"
              key={i}
              to={`/cart/${cat}`}
            >
              <div>{cat}</div>
            </Link>
          ) : (
            <Link className="category__name" key={i} to={`/cart/${cat}`}>
              <div>{cat}</div>
            </Link>
          )
        )}
      </div>
      <div className="shopping__items items shopping__items--cart">
        {cart.map(
          (item, i) =>
            item.category === selectedcat && (
              <Item key={i} item={item} cart={cart} setCart={setCart} />
            )
        )}
      </div>
      {cart.filter((item) => item.category === selectedcat).length === 0 && (
        <div className="shopping__empty">
          <p>Your {selectedcat} Cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
