import React, { useEffect, useState } from "react";
import "./Offer.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container } from "@mui/material";
import axios from "axios";

const Offer = () => {
  const [company, setcompany] = useState([]);

  // get company details data

  axios
    .get("http://localhost:7000/company")
    .then((result) => setcompany(result.data))
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  return (
    <div className="offerSection">
      <h2 className="offerHeading">
        WHAT WE <span className="offerHighlight">OFFER</span>
      </h2>
      <p className="offerSubTitle">Have A Look To Our All Company</p>
      <Container>
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          {company.map((DATA) => (
            <div key={DATA._id} class="item">
              <div className="companyImage">
                <img alt="" src={DATA.image} />
                <div className="tags">
                  <a href="f">Startup</a>
                  <a href="f">Business</a>
                </div>
              </div>
              <div className="companyInfo">
                <h4>
                  <a href="f">{DATA.title}</a>
                </h4>
                <div className="meta">
                  <ul>
                    <li>
                      <a href="f">
                        <i class="fas fa-user"></i> User
                      </a>
                    </li>
                    <li>
                      <a href="f">
                        <i class="fas fa-calendar-alt "></i> {DATA.date}
                      </a>
                    </li>
                    <li>
                      <a href="f">
                        <i className="fas fa-comments"></i> {DATA.message}
                      </a>
                    </li>
                  </ul>
                </div>
                <p>{DATA.discription}</p>
                <div className="readMoor">
                  <a href="f">
                    Read More <i className="fas fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div class="item">
            <div className="companyImage">
              <img alt="" src="" />
              <div className="tags">
                <a href="f">Startup</a>
                <a href="f">Business</a>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="companyImage">
              <img alt="" src="" />
              <div className="tags">
                <a href="f">Startup</a>
                <a href="f">Business</a>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </Container>
    </div>
  );
};

export default Offer;
