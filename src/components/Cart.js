import React from "react";
import Item from './Item'
const Cart = ({
  setselectedcat,
  selectedcat,
  cart,
  setCart,
  category,
  setcategory,
}) => {
  return (
    <div className="shopping">
      <div className="shopping__category category">
        {category.map((cat, i) =>
          selectedcat === cat ? (
            <div
              className="category__name category__name--selected"
              onClick={() => {
                setselectedcat(cat);
              }}
              key={i}
            >
              {cat}
            </div>
          ) : (
            <div
              className="category__name"
              onClick={() => {
                setselectedcat(cat);
              }}
              key={i}
            >
              {cat}
            </div>
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
