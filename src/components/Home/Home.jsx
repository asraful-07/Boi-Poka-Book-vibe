import React from "react";
import Books from "../Books/Books";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <Banner />
      <Books></Books>
    </div>
  );
};

export default Home;
