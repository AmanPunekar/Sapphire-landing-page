import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import SignUp from "./components/signup";
import Pricing from "./components/pricing";
import InvestmentCalc from "./components/investment-calc";
import Gateway from "./components/gateway";

const App = () => {
  return (
    <>
      <Navbar />
      <SignUp/>
      <Pricing/>
      <InvestmentCalc/>
      <Gateway/>
    </>
  );
};

export default App;
