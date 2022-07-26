import React from "react";
import { useLocation,Link,useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../store/cart";
import { cartDataSelector } from "../selectors/cart";
import { removeFromCart } from "../store/cart";

const ProductCard = ({ item }) => {
    const location = useLocation();
    const { selectedCategory } = useParams();
    const {cart} = useSelector(cartDataSelector);
    const dispatch = useDispatch();
    return (
      <div className="card">
        <div className="card__img">
          <img src={item.image} alt="" />
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
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove from cart
              </button>
            ) : (
              <button
                className="buttons__btn buttons__btn--add"
                onClick={() => dispatch(addToCart(item))}
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
