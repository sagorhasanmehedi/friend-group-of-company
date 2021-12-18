import { Container } from "@mui/material";
import React from "react";
import "./Banner.css";
import { useForm } from "react-hook-form";

const Banner = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="banner-area">
      <Container>
        <div className="double-items">
          <div className="bannerText">
            <h1 className="bannerHeading">
              It's Time To Create Your Own <br /> Business Scheme
            </h1>
            <p className="bannerP">
              Celebrated delightful an especially increasing instrument am.{" "}
              <br />
              Indulgence contrasted sufficient to unpleasant in in insensible{" "}
              <br />
              favourable.
            </p>
            <button className="bannerTextButton">Get Started</button>
            {/* <button class="popup-youtube">
              <a href="https://www.youtube.com/watch?v=KCqNEqtN43c">
                <i class="fas fa-play video-inline"></i>
              </a>
            </button> */}

            <button class="plus">
              <a href="https://www.youtube.com/watch?v=KCqNEqtN43c">
                <i class="fas fa-play video-inline"></i>
              </a>
            </button>
          </div>

          <div className="">
            <form className="formInfo" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="formText">
                Sign Up Today And <br /> Receive
                <span className="formTextSpan"> 30 Days </span> FREE Trial.
              </h2>
              <input
                className="bannerInput"
                {...register("example")}
                placeholder="Name*"
                required
              />{" "}
              <br />
              <input
                className="bannerInput"
                {...register("exampleRequired", { required: true })}
                placeholder="Email*"
                required
              />
              <br />
              <input
                className="bannerInput"
                {...register("exampleRequired", { required: true })}
                placeholder="Password*"
                required
              />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}
              <button className="formButton" type="submit">
                Register For Free
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
