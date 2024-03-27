import axios from "axios";
const URL = "http://localhost:8000";
export const authenticationSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (err) {
    console.log("error while calling signup api", err);
  }
};

export const authenticationLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (err) {
    console.log("error while calling login api", err);
    return err.response;
  }
};

export const payUsingPaytm = async (data) => {
  try {
   let response = await axios.post(`${URL}/payment`, data);
   return response.data;
  } catch (err) {
    console.log("error while calling payment api", err.message);
  }
};
