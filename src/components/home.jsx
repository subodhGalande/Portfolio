import React from "react";
import { ReactDOM } from "react";
import Connect from "./connect";
import Hero from "./hero";
import Projects from "./projects";
import Tech from "./tech";
import Work from "./work";
const Home = () => {
  return (
    <>
      <Hero />
      <Tech />
      <Work />
      <Projects />
      <Connect />
    </>
  );
};

export default Home;
