import { createContext, useContext, useReducer } from "react";

const FakeAuthenticationContext = createContext();

const FAKE_USER = {
  name: "Koleto",
  email: "kole@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialValues = {
  user: null,
  isAuthenticated: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("No such action");
  }
};

export const FakeAuthenticationProvider = function ({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialValues
  );
  const login = (email, password) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  };
  const logout = () => {
    dispatch({ type: "logout" });
  };
  return (
    <FakeAuthenticationContext.Provider
      value={{ login, logout, user, isAuthenticated }}
    >
      {children}
    </FakeAuthenticationContext.Provider>
  );
};

export const useAuth = function () {
  const context = useContext(FakeAuthenticationContext);
  if (context === undefined) throw new Error("Using ctx out of scope");
  return context;
};
