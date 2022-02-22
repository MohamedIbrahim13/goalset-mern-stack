import axios from "axios";

const API_URL = "https://goalsetter-api.vercel.app/api/goals";

export const getAll = () => async dispatch => {
  try {
    const { data } = await axios.get(API_URL, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    });
    //console.log("token", token);
    dispatch({ type: "ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addGoal = (goalData) => async dispatch => {
  try {
    const { data } = await axios.post(API_URL, goalData, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    });
    //console.log("token", token);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteGoal = (goalId) => async dispatch => {
  try {
    const { data } = await axios.delete(`${API_URL}/${goalId}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    });
    //console.log("token", token);
    dispatch({ type: "DELETE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
