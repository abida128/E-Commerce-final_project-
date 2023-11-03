import React, { useState } from "react";
import Input from "../../components/input";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Button from "../../components/button";
import Footer from "../../components/footer";

function LoginPage() {
  // State to store the input value
  const [emailInput, setEmail] = useState("");
  const [passInput, setPass] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePassInput = (e) => {
    setPass(e.target.value);
  };
  const handleLogin = (e) => {};

  return (
    <>
      <Header />
      <div className="bg-[#ededed] pb-10">
        <h2 className="p-10 text-[#415161] text-2xl font-semibold">Login</h2>
        <div className="border border-gray-300 p-5 mx-10 rounded">
          <Input
            handleChange={handleEmailInput}
            value={emailInput}
            labelText="Username or email address"
            labelFor="email"
            id="emailID"
            name="email"
            type="email"
            isRequired={true} // or false if not required
            placeholder="Your email"
            customClass=""
          />
          <Input
            handleChange={handlePassInput}
            value={passInput}
            labelText="Password"
            labelFor="password"
            id="passwordID"
            name="password"
            type="password"
            isRequired={true} // or false if not required
            placeholder="Your password"
            customClass=""
          />
          <div className="text-right text-red-600 text-sm mt-[-1em]">
            <Link to="/forgot-password">Lost Your Password?</Link>
          </div>
          <Button label="Login" onClick={handleLogin} />

          <div className="my-3 text-slate-500 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-cyan-600">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;