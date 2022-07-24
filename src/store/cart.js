const UPDATE_CART= 'cart/UPDATE_CART';

export const addToCart = (cart, product) => {
    return {
        type: UPDATE_CART,
        payload: [...cart, product],
    }
}

export const removeFromCart = (cart,item) => {
    return {
        type: UPDATE_CART,
        payload : cart.filter((product) => product.id !== item.id),
    }
}

const cartReducer = (state = {
    cart : [],
},action) => {
    switch(action.type){
        case UPDATE_CART:
            return{
                ...state,
                cart : action.payload,
            }
        default:
            return{...state}
    }
}

export default cartReducer