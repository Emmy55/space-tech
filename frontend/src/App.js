import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import NewsPage from "./components/NewsPage/NewsPage";
import NewsViewPage from "./components/NewsViewPage/NewsViewPage";
import SignIn from "./components/SigninSignup/SignIn";
import SignUp from "./components/SigninSignup/SignUp";
import NewsHeader from "./components/NewsHeader/NewsHeader";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={LandingPage} />
          <Route path="/newspage" component={NewsPage} />
          <Route path="/newsviewpage" component={NewsViewPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Navigate to="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
