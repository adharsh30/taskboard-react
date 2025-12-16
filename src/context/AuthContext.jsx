import { createContext, useReducer, useEffect } from "react";
import authReducer from "./authReducer";

export const AuthContext = createContext();

const initialState = {
  user: null,
  token: null,
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load session from localStorage
  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session"));
    if (session) {
      dispatch({ type: "LOGIN_SUCCESS", payload: session });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
