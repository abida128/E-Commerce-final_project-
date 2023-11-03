// ** React Imports
import { createContext, useEffect, useState } from "react";

// ** Next Import
import { useNavigate, useLocation } from "react-router-dom";

import { axiosClient } from "../configs/axios";
import authConfig from "../configs/auth";

// ** Defaults
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
  // ** States
  const [user, setUser] = useState(defaultProvider.user);
  const [loading, setLoading] = useState(defaultProvider.loading);

  // ** Hooks
  const router = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem(authConfig.storageTokenKeyName);
      if (storedToken) {
        setLoading(true);
        await axiosClient
          .get(authConfig.meEndpoint, {
            headers: {
              Authorization: storedToken,
            },
          })
          .then(async (response) => {
            if (localStorage.getItem(authConfig.storageTokenKeyName))
              localStorage.setItem(
                authConfig.storageTokenKeyName,
                response.data.accessToken
              );

            setLoading(false);
            setUser({ ...response.data.userData });
          })
          .catch(() => {
            localStorage.removeItem("userData");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem(authConfig.storageTokenKeyName);
            setUser(null);
            setLoading(false);
            // if (authConfig.onTokenExpiration === 'logout' && !location.pathname.includes('login')) {
            // router('/login')
            // }
          });
      } else {
        setLoading(false);
      }
    };
    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (params, errorCallback, successCallback) => {
    axiosClient
      .post(authConfig.loginEndpoint, params)
      .then(async (response) => {
        if (params.rememberMe) {
          localStorage.setItem(
            authConfig.storageTokenKeyName,
            response.data.accessToken
          );
        }

        const queryParams = new URLSearchParams(location.search);
        const returnUrl = queryParams.get("returnUrl");
        setUser({ ...response.data.userData });
        if (params.rememberMe)
          localStorage.setItem(
            "userData",
            JSON.stringify(response.data.userData)
          );

        const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/";
        router(redirectURL);
        if (successCallback) successCallback();
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };
  const handleSignUp = (params, errorCallback, successCallback) => {
    axiosClient
      .post(authConfig.registerEndpoint, params)
      .then(() => {
        router("/");
        if (successCallback) successCallback();
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleLogout = () => {
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
