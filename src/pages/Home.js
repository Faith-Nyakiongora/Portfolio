import React from "react";
import cover_backg from "../Assets/canvabackg.png";
import girl_ill from "../Assets/girlillustration.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <img src={girl_ill} alt="girl illustration" className="girl-image" />
      {/* <image src={girl_img} alt="girl illustration" /> */}
      <img src={cover_backg} alt="background " className="canvas-background" />
      <div className="about">
        <h2>Hi, My Name is Faith</h2>
        <div className="prompt">
          <p>I am a Software Developer</p>
        </div>
      </div>
      <div className="skills"></div>
    </div>
  );
}

export default Home;
