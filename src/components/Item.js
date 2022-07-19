import React from "react";
import { Link,useParams } from "react-router-dom";

const Item = ({ item, cart, setCart }) => {
  const removeFromCart = () => {
    let ri;
    for(let i=0;i<cart.length;i++){
        if(cart[i].id === item.id && cart[i].category === item.category){
            ri=i;
            break;
        }
    }
    let tempCart = [...cart];
    tempCart.splice(ri,1);
    setCart(tempCart);
  };
  const {selectedcat} = useParams();
  return (
    <div className="items__card card">
      <div className="card__img">
        <img src={item.image} width="50px" height="50px" />
      </div>
      <div className="card__details details">
        <div className="details__title">{item.title}</div>
        <div className="details__price">${item.price}</div>
        <div className="details__rating rating">
          <div className="rating__count">User Reviews: {item.rating.count}</div>
          <div className="rating__rate">Rating: {item.rating.rate}</div>
        </div>
        <div className="details__buttons buttons">
          {cart.filter(
            (cartItem) =>
              cartItem.id === item.id && cartItem.category === item.category
          ).length ? (
            <button
              className="buttons__btn buttons__btn--remove"
              onClick={removeFromCart}
            >
              Remove from cart
            </button>
          ) : (
            <button
              className="buttons__btn buttons__btn--add"
              onClick={() => setCart([item, ...cart])}
            >
              Add to cart
            </button>
          )}
          <Link className="route-link"
            to={`/products/${selectedcat}/${item.id}`}
          ><button className="buttons__btn buttons__btn--more">
            View Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
