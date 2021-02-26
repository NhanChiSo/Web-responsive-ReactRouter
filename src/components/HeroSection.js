import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import video from "../videos/video-2.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
          <i class="far fa-play-circle" aria-hidden="true"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
