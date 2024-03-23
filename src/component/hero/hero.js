import React from "react";
import "./hero.css";
import hero from "../../images/illustration-working.svg";
const Hero = () => {
  return (
    <div className="HeroComponent">
      <div className="heroWord">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="HeroButton">Get Start</button>
      </div>
      <img src={hero} alt="HeroImage" />
    </div>
  );
};

export default Hero;
