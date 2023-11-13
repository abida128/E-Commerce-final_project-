import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import LoginPage from "./pages/login/login";
import ForgotPass from "./pages/login/forgotPass";
import SignPage from "./pages/signup/signup";
import ContactPage from './pages/ContactPage.js';
import { SuspenseLayout } from "./layouts/SuspenseLayout";
import { ErrorBoundary } from "./components/errorBoundary";
import { AppRouter } from "./routes";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <AppRouter />
      <Toaster position="top-center" />
   
      
    </>
  );
}

export default App;
