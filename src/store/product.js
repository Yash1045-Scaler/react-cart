const UPDATE_PRODUCT_REQUEST = "product/UPDATE_REQUEST";
const UPDATE_PRODUCT_SUCCESS = "product/UPDATE_SUCCESS";
const UPDATE_PRODUCT_ERROR = "product/UPDATE_ERROR";

export const updateProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });
    try {
      let url = "https://fakestoreapi.com/products/" + id;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const product = await res.json();
      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: product });
    } catch (err) {
      dispatch({ type: UPDATE_PRODUCT_ERROR, payload: err });
    }
  };
};

const productReducer = (
  state = {
    product: {},
    loading: false,
    error: "",
  },
  action
) => {
  switch (action.type) {
    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case UPDATE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        product:[],
        error: action.payload,
      };
    default:
      return { ...state };
  }
};


export default productReducer;
