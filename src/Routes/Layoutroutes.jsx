import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "../Components/About";
import Work from "../Components/Work";
import Skill from "../Components/Skill";
import Contact from "../Components/Contact";
import Header from "../Components/Header";

function Layoutroutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/mywork" element={<Work />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Layoutroutes;
