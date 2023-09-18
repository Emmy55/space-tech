import React from "react";
import "./App.css";
// import LandingPage from "./components/LandingPage/LandingPage";
// import NewsPage from "./components/NewsPage/NewsPage";
import NewsViewPage from "./components/NewsViewPage/NewsViewPage";
import SignIn from "../src/components/SigninSignup/SignIn";
import SignUp from "../src/components/SigninSignup/SignUp";
function App() {
  return (
    <div className="App">
      <NewsViewPage />
    </div>
  );
}

export default App;
