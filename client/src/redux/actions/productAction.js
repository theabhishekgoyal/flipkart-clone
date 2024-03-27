import axios from "axios";
import * as actionTypes from "../constants/productConstant";

const URL = "http://localhost:8000";
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    // console.log(response);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    console.log("error while alling getProducts api", err.message);
    dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE, payload: err.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST });
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_FAILURE, payload: err.message });
  }
};
