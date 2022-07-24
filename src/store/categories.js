const UPDATE_CATEGORIES_REQUEST = "categories/UPDATE_REQUEST";
const UPDATE_CATEGORIES_SUCCESS = "categories/UPDATE_SUCCESS";
const UPDATE_CATEGORIES_ERROR = "categories/UPDATE_ERROR";

export const updateCategories = () => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_CATEGORIES_REQUEST });
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const categories = await res.json();
      dispatch({ type: UPDATE_CATEGORIES_SUCCESS, payload: categories });
    } catch (err) {
      dispatch({ type: UPDATE_CATEGORIES_ERROR, payload: err });
    }
  };
};

const categoriesReducer = (
  state = {
    categories: [],
    loading: false,
    error: "",
  },
  action
) => {
  switch (action.type) {
    case UPDATE_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case UPDATE_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};


export default categoriesReducer;
