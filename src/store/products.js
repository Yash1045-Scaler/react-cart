const UPDATE_PRODUCTS_REQUEST = 'products/UPDATE_REQUEST';
const UPDATE_PRODUCTS_SUCCESS = 'products/UPDATE_SUCCESS';
const UPDATE_PRODUCTS_ERROR = 'products/UPDATE_ERROR';

export const updateProducts = (selectedCategory) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_PRODUCTS_REQUEST });
        try {
            let url =
                "https://fakestoreapi.com/products/category/" + selectedCategory;
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const products = await res.json();
            dispatch({ type: UPDATE_PRODUCTS_SUCCESS, payload: products });
        } catch (err) {
            dispatch({ type: UPDATE_PRODUCTS_ERROR, payload: err });
        }
    }
};

const productsReducer = (state = {
    products: [],
    loading: false,
    error: '',
}, action) => {
    switch(action.type){
        case UPDATE_PRODUCTS_REQUEST:
            return {
                ...state,
                loading : true,
            }
        case UPDATE_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case UPDATE_PRODUCTS_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return {...state}
    }
}
export default productsReducer