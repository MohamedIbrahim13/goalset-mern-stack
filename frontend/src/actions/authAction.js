import axios from "axios";

const API_URL = "https://goalsetter-api.vercel.app/api/users";

export const register = userData => async dispatch => {
  try {
    const { data } = await axios.post(API_URL, userData, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    dispatch({ type: "REGISTER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const login = userData => async dispatch => {
  try {
    const { data } = await axios.post(`${API_URL}/login`, userData, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    dispatch({ type: "LOGIN", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async dispatch => {
	try {
		dispatch({ type: "LOGOUT" });
    } catch (error) {
        console.log(error);
    }
  
};
