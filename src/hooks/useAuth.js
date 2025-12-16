import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth() {
  const { state, dispatch } = useContext(AuthContext);

  function login(user, token) {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { user, token },
    });
  }

  function logout() {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("session");
  }

  return {
    user: state.user,
    token: state.token,
    login,
    logout,
  };
}
