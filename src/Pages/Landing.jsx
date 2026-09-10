import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";
import Features from "../components/Features";
import LandingFooter from "../components/landingFooter";

const Landing = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
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
