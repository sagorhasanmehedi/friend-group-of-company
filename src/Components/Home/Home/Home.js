import React from "react";
import Header from "../../Shared/Header/Header";
import Questionanswer from "../Accordion/Questionanswer";
import Banner from "../Banner/Banner";
import Choseus from "../Choseus/Choseus";
import Contactus from "../Contactus/Contactus";
import Offer from "../Offer/Offer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Offer />
      <Questionanswer />
      <Choseus />
      <Contactus />
    </div>
  );
};

export default Home;
