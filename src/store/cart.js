const ADD_TO_CART = "cart/ADD_TO_CART";
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
};

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload:id,
    };
};

const cartReducer = (
    state = {
        cart: [],
    },
    action
) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart,action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: [...state.cart.filter((product) => product.id !== action.payload)],
            };
        default:
            return { ...state };
    }
};

export default cartReducer;
