import { Container, Grid } from "@mui/material";
import React from "react";
import "./Contactus.css";
import { useForm } from "react-hook-form";

const Contactus = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="contactUsSection">
      <h2 className="offerHeading">
        CONTACT <span className="offerHighlight">US</span>
      </h2>
      <h4 className="offerSubTitle">Do You Have Any Questions?</h4>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={8}>
            <h2 className="contactHeading">Let's Lalk About Your Idea</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="contactName"
                placeholder="Name"
                {...register("name")}
              />

              <div className="contactEmailPhone">
                <input
                  placeholder="Email*"
                  {...register("email", { required: true })}
                />
                <input placeholder="Phone" {...register("phone")} />
              </div>
              <textarea
                className="contactTextarea"
                placeholder="Tell Us About Project *"
              ></textarea>

              <button className="contactButton" type="submit">
                SEND MESSAGE <i className="fa fa-paper-plane"></i>
              </button>
            </form>
          </Grid>
          <Grid item md={4}>
            <div className="addresItem">
              <ul>
                <li>
                  <h4 className="ContactAddres">OFFICE LOCATION</h4>
                  <div className="iconAddres">
                    <div className="icon">
                      <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <span>
                      22 Baker Street,
                      <br />
                      London, United Kingdom,
                      <br />
                      W1U 3BW
                    </span>
                  </div>
                </li>
                <li>
                  <h4 className="ContactAddres">PHONE</h4>
                  <div className="iconAddres">
                    <div className="icon">
                      <i class="fas fa-phone"></i>
                    </div>
                    <span>
                      +44-20-7328-4499 <br />
                      +99-34-8878-9989
                    </span>
                  </div>
                </li>
                <li>
                  <h4 className="ContactAddres">Email</h4>
                  <div className="iconAddres">
                    <div className="icon">
                      <i class="fas fa-envelope-open"></i>
                    </div>
                    <span>
                      info@yourdomain.com
                      <br />
                      admin@yourdomain.com
                    </span>
                  </div>
                </li>
                <li className="contactSocialIcon">
                  <h4 className="ContactAddres">SOCIAL ADDRESS</h4>
                  <ul>
                    <li className="facebook contacIcon">
                      <a href="f">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="twitter contacIcon">
                      <a href="f">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="pinterest contacIcon">
                      <a href="f">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                    <li className="instagram contacIcon">
                      <a href="f">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contactus;
