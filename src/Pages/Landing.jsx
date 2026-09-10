import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";
import Features from "../components/Features";
import LandingFooter from "../components/landingFooter";

const Landing = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Features />
      <LandingFooter />
    </>
  );
};

export default Landing;
