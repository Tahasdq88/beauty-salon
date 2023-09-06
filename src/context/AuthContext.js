// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { database } from "../Helper/firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const signup = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data);
        toast.success("Sginup Successful! ");
        navigate("/login");
      })
      .catch((error) => {
        setError(error);
        toast.error("User Already exist!");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const login = (username, password) => {
    setLoading(true);
    signInWithEmailAndPassword(database, username, password)
      .then((data) => {
        toast.success("User has been registered! ");
        // console.log(data.user.accessToken);
        localStorage.setItem("token", JSON.stringify(data.user.accessToken));
        setIsAuthenticated(true);
        navigate("/");
      })
      .catch((error) => {
        toast.error("Wrong Credentials!");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const value = {
    user,
    signup,
    login,
    logout,
    loading,
    error,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
