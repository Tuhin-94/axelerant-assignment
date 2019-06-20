import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeadBody from "./templates/Header/HeadBody";
import Body from "./templates/BodyBG/Body";
import NavHead from "./templates/NavBar/NavHead";
import Testimonials from "./templates/Quotation/Testimonials";
import Footer from "./Footer/Footer";
import Bodytail from "./templates/Tail/Bodytail";
function App() {
  return (
    <div>
      {/* <NavHead style={{ display: "inline-block" }} /> */}
      <NavHead />
      <Body />
      <HeadBody />
      <Testimonials />
      <Bodytail />
      <Footer />
    </div>
  );
}

export default App;
