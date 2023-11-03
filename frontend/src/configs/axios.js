import axios from "axios";
import authConfig from "./auth";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
});

// Request interceptor to add the access token to each request
axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(authConfig.storageTokenKeyName);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration and refresh token
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Attempt to refresh the access token using the refresh token
      try {
        const storedToken = localStorage.getItem(
          authConfig.storageTokenKeyName
        );
        const response = await axiosClient.get(authConfig.meEndpoint, {
          headers: {
            Authorization: storedToken,
          },
        });

        // Update the access token in localStorage and retry the original request
        const newAccessToken = response.data.accessToken;
        localStorage.setItem(authConfig.storageTokenKeyName, newAccessToken);
        originalRequest.headers.Authorization = newAccessToken;

        return axiosClient(originalRequest);
      } catch (error) {
        // If refresh token request fails, log out the user or redirect to the login page
        console.log("Error refreshing token:", error);
        // Perform logout or redirect logic here
      }
    }
    return Promise.reject(error);
  }
);
