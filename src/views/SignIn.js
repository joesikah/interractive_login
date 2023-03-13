import React, { useContext } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import SignInForm from "./SignInForm";
import ThemeContext from "../context/ThemeContext";

const SignIn = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  //toggle mode
  const toggleMode = () => {
    if (isDark === false) {
      setIsDark(!isDark);
    } else {
      setIsDark(!isDark);
    }
  };

  return (
    <>
      <div
        className={`w-[100vw] h-[100vh] ${
          isDark ? "bg-gray-700" : "bg-blue-400"
        }`}
      >
        <div className="flex justify-end">
          {isDark ? (
            <SunIcon
              className="w-5 h-5 m-3 cursor-pointer text-white"
              onClick={() => toggleMode()}
            />
          ) : (
            <MoonIcon
              className="w-5 h-5 m-3 cursor-pointer text-white"
              onClick={() => toggleMode()}
            />
          )}
        </div>
        {/* the form */}
        <SignInForm />
      </div>
    </>
  );
};

export default SignIn;
