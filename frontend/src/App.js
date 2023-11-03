import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login";
import ForgotPass from "./pages/login/forgotPass";
import SignPage from "./pages/signup/signup";
function App() {
  return (
    <div className="">
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignPage />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
