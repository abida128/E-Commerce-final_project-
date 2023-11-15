import { lazy } from "react";
import Home from "../pages/homePage/home";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import LoginPage from "../pages/login/login";
import SignPage from "../pages/signup/signup";
import ForgotPass from "../pages/login/forgotPass";
import ContactPage from "../pages/ContactPage";
import { ErrorBoundary } from "../components/errorBoundary";
import { SuspenseLayout } from "../layouts/SuspenseLayout";

import AboutUs from "../pages/aboutUs/aboutUs";
import Product from "../pages/products";
import ProfilePageComponent from "../pages/profile";

export const AppRouter = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route
            errorElement={<ErrorBoundary />}
            element={
              <SuspenseLayout>
                <Outlet />
              </SuspenseLayout>
            }
          >
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignPage />} />
            <Route path="/Products" element={<Product />} />

            <Route path="/forgot-password" element={<ForgotPass />} />

            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/profile" element={<ProfilePageComponent />} />

            <Route path="/contact" element={<ContactPage />} />
          </Route>
        )
      )}
    />
  );
};
