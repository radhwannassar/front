import { useState, useEffect } from "react";

import { Header } from "../HomeComponents/header";

import { About } from "../HomeComponents/about";
import { Services } from "../HomeComponents/services";
import { Gallery } from "../HomeComponents/gallery";
import { Testimonials } from "../HomeComponents/testimonials";

import { Contact } from "../HomeComponents/contact";
import JsonData from "../HomeComponents/data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Home;
