import { createContext,useReducer } from "react";

export const InitialState = {
  count: 0,
  user:JSON.parse(localStorage.getItem("user")) || null
};
export const authReducer = (state, action) => {
  switch (action.type) {
    // Handle different action types and update the state accordingly
    case "INCREMENT":
      return { ...state,count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "LOGIN":
      return { ...state, user: action.payload};
    default:
      return state;
  }
};
export const Auth = createContext(InitialState);

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, InitialState);
  return (
    <Auth.Provider value={{ state: state.count, dispatch }}>
      {children}
    </Auth.Provider>
  );
};
export default AuthContext;
