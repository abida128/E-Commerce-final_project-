import React, { useState } from "react";
import Input from "../../components/input";
import Header from "../../components/header";
import Button from "../../components/button";
import Footer from "../../components/footer";

function SignPage() {
  // State to store the input value
  const [emailInput, setEmail] = useState("");
  const [passInput, setPass] = useState("");
  const [usernameInput, setUsername] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassInput = (e) => {
    setPass(e.target.value);
  };
  const handleSign = (e) => {};

  return (
    <>
      <Header />
      <div className="bg-[#ededed] pb-10">
        <h2 className="p-10 text-[#415161] text-2xl font-semibold">Register</h2>
        <div className="border border-gray-300 p-5 mx-10 rounded">
          <Input
            handleChange={handleUsername}
            value={usernameInput}
            labelText="Username"
            labelFor="username"
            id="usernameID"
            name="username"
            type="string"
            isRequired={true} // or false if not required
            placeholder=" Your Username"
            customClass=""
          />
          <Input
            handleChange={handleEmail}
            value={emailInput}
            labelText="Email"
            labelFor="email"
            id="emailID"
            name="email"
            type="email"
            isRequired={true} // or false if not required
            placeholder="Your Email"
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
          <Input
            handleChange={handlePassInput}
            value={passInput}
            labelText="Confirm Password"
            labelFor="confirmPass"
            id="confirmPassID"
            name="confirmPass"
            type="password"
            isRequired={true} // or false if not required
            placeholder="Confirm Password"
            customClass=""
          />
          <Button label="Register" onClick={handleSign} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignPage;
