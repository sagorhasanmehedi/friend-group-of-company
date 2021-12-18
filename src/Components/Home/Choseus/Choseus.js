import { Container } from "@mui/material";
import React from "react";
import "./Choseus.css";

const Choseus = () => {
  return (
    <div className="about-area">
      <Container>
        <div className="aboutInfo">
          <img
            src="https://validthemes.online/themeforest/dostart/assets/img/work/4.png"
            alt=""
            srcset=""
            className="aboutImage"
          />
          <div className="aboutText">
            <h4 className="aboutHeading">WHY CHOSE US</h4>
            <h2 className="aboutMainHeading">
              Designed for startups <br /> with expert developer
            </h2>
            <p className="aboutDiscription">
              Both rest of know draw fond post as. It agreement defective to
              excellent. Feebly do engage
              <br /> narrow. Extensive repulsive belonging depending if
              promotion be zealously as. Preference <br /> inquietude ask now
              are dispatched led appearance. Small meant in so doubt hopes.
            </p>
            <ul>
              <li>
                <h5>ROCKET FAST</h5>
                <span>Elderly is detract tedious assured private</span>
              </li>
              <li>
                <h5>CUSTOM FRAMEWORK</h5>
                <span>Do travelling companions contrasted</span>
              </li>
              <li>
                <h5>MINIMAL DESIGN</h5>
                <span>Mistress strongly remember up</span>
              </li>
            </ul>
            <button className="aboutButton">READ MORE</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Choseus;
