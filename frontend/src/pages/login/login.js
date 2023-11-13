import React, { useState } from "react";
import Input from "../../components/input";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Button from "../../components/button";
import Footer from "../../components/footer";
import { GuardWrapper } from "../../layouts/GuardWrapper";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import BlankLayout from "../../layouts/BlankLayout";

function LoginPage(props) {
  const auth = useAuth();
  // State to store the input value
  const [emailInput, setEmail] = useState("");
  const [passInput, setPass] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePassInput = (e) => {
    setPass(e.target.value);
  };
  const handleLogin = async (e) => {
    const promiseSignin = new Promise((resolve, reject) => {
      auth.login(
        { password: passInput, email: emailInput, rememberMe: true },
        // error callback
        () => {
          reject("Email or Password is invalid");
        },
        // success callback
        () => {
          resolve("");
        }
      );
    });

    toast.promise(promiseSignin, {
      loading: "Authenticating...",
      success: "Signed in successfully",
      error: (err) => err,
    });
  };

  return (
    <GuardWrapper {...props}>
      <div className="bg-[#ededed] pb-10 min-w-min md:min-w-[700px]">
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
    </GuardWrapper>
  );
}
LoginPage.defaultProps = {
  getLayout: (page) => <BlankLayout>{page}</BlankLayout>,
  guestGuard: true,
};

export default LoginPage;
