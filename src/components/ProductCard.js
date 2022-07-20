import React from "react";
import { useLocation,Link,useParams } from "react-router-dom";

import "../styles/components/ProductCard.scss";

const ProductCard = ({ item, cart, setCart }) => {
    const location = useLocation();
    const { selectedCategory } = useParams();

    const removeFromCart = () => {
        let tempCart = cart.filter((product) => product.id !== item.id);
        setCart(tempCart);
    };
    return (
      <div className="item__card card">
        <div className="card__img">
          <img src={item.image} />
        </div>
        <div className="card__details details">
          <div className="details__title">{item.title}</div>
          {location.pathname.split("/").length === 4 && (
            <div className="details__description">{item.description}</div>
          )}
          <div className="details__price">${item.price}</div>
          <div className="details__rating rating">
            <div className="rating__count">
              User Reviews: {item.rating.count}
            </div>
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
            {location.pathname.split("/").length === 3 && (
              <Link to={`/products/${selectedCategory}/${item.id}`}>
                <button className="buttons__btn buttons__btn--more">
                  View Product
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default ProductCard;
