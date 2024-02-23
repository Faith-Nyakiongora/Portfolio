import React from "react";
import background_cover from "../Assets/background.jpg";

function CoverImage() {
  return (
    <div>
      <img
        src={background_cover}
        alt="background "
        className="canvas-background"
      />
    </div>
  );
}

export default CoverImage;
