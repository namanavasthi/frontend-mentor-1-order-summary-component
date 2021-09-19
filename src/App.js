import { Card } from "./Card";
import { Content } from "./Content";
import { Music } from "./Music";

import React, { useEffect, useState } from "react";

import hero from "./images/illustration-hero.svg";
import background from "./images/pattern-background-mobile.svg";
import backgroundDesktop from "./images/pattern-background-desktop.svg";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const imageUrl = windowWidth >= 768 ? backgroundDesktop : background;

  return (
    <div
      className="flex justify-center bg-primary-pale py-20 px-5 bg-background"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 50%",
      }}
    >
      <Card>
        <img src={hero} alt="Illustrative hero"></img>
        <Content>
          <h3 className="text-2xl md:text-3xl font-bold">Order Summary</h3>
          <p className="text-neutral-desaurated pt-5 text-base">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>
          <Music />
          <button className="bg-primary-bright text-white rounded-xl p-3 mt-5 text-base shadow-button focus:opacity-60">
            Proceed to Payment
          </button>
          <button className="text-neutral-desaurated p-3 mt-3 text-base focus:text-neutral-dark">Cancel Order</button>
        </Content>
      </Card>
    </div>
  );
};

export default App;
