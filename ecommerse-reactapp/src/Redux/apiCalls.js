import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log(JSON.parse(res.data));
    //localStorage.setItem("isLoggedIn", true)
    //localStorage.setItem("token", res.data);
  } catch (error) {
    dispatch(loginFailure());
  }
};
