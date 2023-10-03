import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import NewsPage from "./components/NewsPage/NewsPage";
import NewsViewPage from "./components/NewsViewPage/NewsViewPage";
import SignIn from "../src/components/SigninSignup/SignIn";
import SignUp from "../src/components/SigninSignup/SignUp";
import NewsHeader from "./components/NewsHeader/NewsHeader";
function App() {
  return (
    <div className="App">
      <LandingPage />
      {/* <NewsHeader /> */}
      <NewsViewPage />
      {/* <NewsPage /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
