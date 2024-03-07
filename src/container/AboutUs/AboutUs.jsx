import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div className="app-aboutus app__bg flex__center section__padding" id="about">
    <div className="app_aboutus-overlay flex__center">
      <img src={images.G} alt="letter G capital " />
    </div>

    <div className="app_aboutus-content flex__center">
      <div className="app_aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app_aboutus-content_knife flex__center">
        <img src={images.knife} alt="kinfe" />
      </div>
    </div>
  </div>
);

export default AboutUs;
