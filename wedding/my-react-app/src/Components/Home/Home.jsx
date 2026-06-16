import React from "react";

import Banner from "./Banner";
import Num from "./Num";
import Aboutsec from "./Aboutsec";
import Recently from "./Recently";
import Upcoming from "./Upcoming";
import Costumes from "./Costumes";
import Whychoose from "./Whychoose";
import Ourgallery from "./Ourgallery";
import Contact from "./Contact";
import Faq from "./Faq";
import Wantwelcome from "./Wantwelcome";

import Venuedata from "../Venue/Venuedata";

const Home = () => {
  return (
    <div>
      <Banner />

      <Whychoose />

      <Num />

      <Recently />

      <Venuedata showBanner={false} />

      <Ourgallery />

      <Aboutsec />

      {/* <Upcoming /> */}

      {/* <Costumes /> */}
      
      {/* <Faq /> */}

      {/* <Wantwelcome /> */}

      {/* <Contact /> */}

      
    </div>
  );
};

export default Home;