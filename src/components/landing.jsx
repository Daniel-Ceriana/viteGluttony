import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";

import CarrouselHomeDinamico from "./carrusel/carrusel-dinamico";
import Welcome from "./Welcome/Welcome";
export default function Landing() {
  return (
    <>
      <Welcome />
      <CarrouselHomeDinamico />
      <About />
      <Contact />
    </>
  );
}
