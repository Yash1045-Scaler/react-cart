const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';


export const addToCart = (cart, product) => {
    return {
        type: ADD_TO_CART,
        payload: [...cart, product],
    }
}

export const removeFromCart = (cart,item) => {
    return {
        type: REMOVE_FROM_CART,
        payload : cart.filter((product) => product.id !== item.id),
    }
}

const cartReducer = (state = {
    cart : [],
},action) => {
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cart : action.payload,
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart: action.payload,
            }
        default:
            return{...state}
    }
}

export default cartReducer