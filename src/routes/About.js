import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>"React를 공부하고 있습니다."</span>
      <span>- ez__bro</span>
    </div>
  );
}

export default About;
