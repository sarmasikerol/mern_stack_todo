import { toast } from "react-toastify";
import axios from "axios";

export const registerAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5001/register",
      authData
    );

    dispatch({ type: "REGISTER", payload: data });

    window.location = "/";
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

export const loginAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:5001/login", authData);

    dispatch({ type: "LOGIN", payload: data });

    window.location = "/";
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
