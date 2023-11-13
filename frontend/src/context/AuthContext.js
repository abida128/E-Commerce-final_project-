import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { axiosClient } from "../configs/axios";
import authConfig from "../configs/auth";

const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  signup: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(defaultProvider.user);
  const [loading, setLoading] = useState(defaultProvider.loading);
  const router = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem(authConfig.storageTokenKeyName);

      if (storedToken) {
        try {
          setLoading(true);
          const response = await axiosClient.get(authConfig.meEndpoint, {
            headers: {
              Authorization: storedToken,
            },
          });

          const newToken = response.data.accessToken;
          if (newToken !== storedToken) {
            console.log("Updating access token:", newToken);
            localStorage.setItem(authConfig.storageTokenKeyName, newToken);
          }

          setUser({ ...response.data.userData });
        } catch (error) {
          console.error("Authentication error:", error);
          handleLogout(); // Add additional error handling if needed
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (params, errorCallback, successCallback) => {
    console.log(localStorage.getItem(authConfig.storageTokenKeyName, "tokee"));
    try {
      const response = await axiosClient.post(authConfig.loginEndpoint, params);
      const newToken = response.data.accessToken;

      localStorage.setItem(authConfig.storageTokenKeyName, newToken);

      const returnUrl = new URLSearchParams(location.search).get("returnUrl");
      setUser({ ...response.data.userData });

      console.log("Storing user data:", response.data.userData);
      localStorage.setItem("userData", JSON.stringify(response.data.userData));

      const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/";
      router(redirectURL);
      if (successCallback) successCallback();
    } catch (error) {
      console.error("Login error:", error);
      if (errorCallback) errorCallback(error);
    }
  };

  const handleSignUp = async (params, errorCallback, successCallback) => {
    try {
      await axiosClient.post(authConfig.registerEndpoint, params);
      router("/login");
      if (successCallback) successCallback();
    } catch (error) {
      console.error("Sign-up error:", error);
      if (errorCallback) errorCallback(error);
    }
  };

  const handleLogout = () => {
    console.log("Logout");
    setUser(null);
    localStorage.removeItem("userData");
    localStorage.removeItem(authConfig.storageTokenKeyName);
    router("/");
  };

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    signup: handleSignUp,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
