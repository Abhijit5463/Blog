import React from "react";
import { useSelector } from "react-redux";
import Blogs from "./Components/Blog";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { selectSignedIn } from "./features/userSlice";
import "./styling/app.css";

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <Navbar />
      <Home />
      {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;
