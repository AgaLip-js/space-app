import axios from "axios";
import jwtDecode from "jwt-decode";
import {Dispatch, AnyAction} from 'redux';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_STATE,
  SET_CURRENT_USER,
} from "./types";
import { returnErrors } from "./errorActions";
import setAuthToken from '../../utils/setAuthToken';
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { AuthToken, ResponseError, ResponseSuccess } from "../../interfaces/authInterface";
import isEmpty from "../../validation/is-empty";
import { MyFormValues, myRegisterFormValues } from "../../interfaces/loginInterface";

// check token & load user
export const loadUser = () => (dispatch: Dispatch<any>) => {
  // User loading
  dispatch({ type: USER_LOADING });
    // Check for token
    if (localStorage.jwtToken) {
        // Set auth token header auth
        setAuthToken(localStorage.jwtToken);
        // Decode token and get user info and exp
        let decoded = {exp: 0};

        decoded = jwtDecode(localStorage.jwtToken);

        if(!isEmpty(decoded)) {
            // Set user and isAuthenticated
            dispatch(setCurrentUser(decoded));

            // Check for expired token
            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                // Logout user
                dispatch(logoutUser());
            }
        }
    }
};


export type registerSuccessAction ={type: string, payload: string}

// Register User
export const register = (userData: myRegisterFormValues) => (dispatch: Dispatch<any>) => {
  axios
    .post("/user/register", userData)
    .then((res: ResponseSuccess) => {
      if (res.data === "User already exist!") {
        toast.error("Użytkownik już istnieje!");
      } else {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        const history = useHistory();
        history.push("/login");
        toast.success("Pomyślnie zarejestrowano");
      }
    })
    .catch((err: ResponseError) => {
      dispatch(
        returnErrors(err.response.data)
      );
      dispatch({
        type: REGISTER_FAIL,
      });
      toast.error("Błąd przy rejestracji");
    });
};

export const login = (user: MyFormValues) => (dispatch: Dispatch<any>) => {
  axios
    .post("/user/login", user)
    .then((res: ResponseSuccess) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      toast.success("Pomyślnie zalogowano");
    })
    .catch((err: ResponseError) => {
      dispatch(
        returnErrors(err.response.data)
      );
      dispatch({
        type: LOGIN_FAIL,
      });
      toast.error("Nieprawidłowy email lub hasło");
    });
};

// Set logged in user
export const setCurrentUser = (decoded: any) => ({
    type: SET_CURRENT_USER,
    payload: decoded,
});

export const clearData = () => {
  return {
    type: CLEAR_STATE,
  };
};

export const logoutUser = () => (dispatch: Dispatch<any>) => {
  // Remove token from localStorage
  localStorage.removeItem("token");

  // Remove auth header for future requests
  setAuthToken(null);

  // Set current user which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  dispatch(clearData());
  toast.success("Pomyślnie wylogowano");
};