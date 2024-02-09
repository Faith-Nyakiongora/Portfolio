import React from "react";
import cover_backg from "../Assets/canvabackg.png";
import background_cover from "../Assets/background.jpg";
import girl_ill from "../Assets/girlillustration.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="col-md-5">
        <img src={girl_ill} alt="girl illustration" className="girl-image" />
      </div>

      <img
        src={background_cover}
        alt="background "
        className="canvas-background"
      />
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
