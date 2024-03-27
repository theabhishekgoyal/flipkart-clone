import * as actionType from "../constants/productConstant";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };

    case actionType.GET_PRODUCTS_FAILURE:
      return { error: action.payload };

    default:
      return state;
  }
};
export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS_DETAILS_REQUEST:
      return { loading: true };
    case actionType.GET_PRODUCTS_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case actionType.GET_PRODUCTS_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    case actionType.GET_PRODUCTS_DETAILS_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload; // action means jo piche se aa rha hai or store krana hai
      const exist = state.cartItems.find((product) => product.id === item.id); // state means jo already exist krta hai
      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map((data) =>
            data.product === exist.product ? item : data
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
