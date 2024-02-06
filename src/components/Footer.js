import React from "react";
import github_icon from "../Assets/githubicon.png";
import linkedin_icon from "../Assets/linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="https://github.com/Faith-Nyakiongora#hi--im-faith-nyakiongora">
          <img src={github_icon} alt="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/faith-nyakiongora-806888112/">
          <img src={linkedin_icon} alt="linkedin icon" />
        </a>
      </div>
      <p> &copy; https://faith-nyakiongora-portfolio.netlify.app/</p>
    </div>
  );
}

export default Footer;
