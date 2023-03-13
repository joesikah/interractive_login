import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./views/SignIn";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
