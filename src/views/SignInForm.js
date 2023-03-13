import React, { useContext, useState } from "react";
import { Form, FloatingLabel, Image } from "react-bootstrap";
import emailImg from "../images/email.gif";
import passwordImg from "../images/password.gif";
import welcomeImg from "../images/welcome.gif";
import submitImg from "../images/submit.gif";
import ThemeContext from "../context/ThemeContext";

const SignInForm = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [isFocused, setIsFocused] = useState("");

  {
    /* onsubit */
  }
  const submitForm = (e) => {
    e.preventDefault();
    setIsFocused("submit");
  };

  return (
    <div class="flex items-center justify-center">
      <div class="text-center h-[500px] w-[350px] md:w-[400px] bg-white shadow-sm p-[20px] rounded-[5px] mt-3">
        {/* render emoji based on focus start */}
        {isFocused === "email" ? (
          <Image
            className="w-[200px] flex ml-auto mr-auto"
            src={emailImg}
            alt="..."
            fluid
          />
        ) : isFocused === "password" ? (
          <Image
            className="w-[200px] flex ml-auto mr-auto"
            src={passwordImg}
            alt="..."
            fluid
          />
        ) : isFocused === "submit" ? (
          <Image
            className="w-[200px] flex ml-auto mr-auto"
            src={submitImg}
            alt="..."
            fluid
          />
        ) : (
          <Image
            className="w-[200px] flex ml-auto mr-auto"
            src={welcomeImg}
            alt="..."
            fluid
          />
        )}
        {/* render emoji based on focus end */}

        <Form onSubmit={submitForm} className="mt-4">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onFocus={() => setIsFocused("email")}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              onFocus={() => setIsFocused("password")}
              required
            />
          </FloatingLabel>

          <button
            type="submit"
            className={`py-2 px-4 text-white mt-4 shadow-sm ${
              isDark ? "bg-gray-700" : "bg-blue-400"
            }`}
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;
