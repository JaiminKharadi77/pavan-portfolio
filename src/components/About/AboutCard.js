import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pavan Rohera </span>
            from <span className="purple">Vapi, India.</span>
            <br />
            I have completed a VFX diploma from FX School, Andheri.
            <br />
            <br />
            Apart from my professional pursuits, some other activities that I
            love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Creative Art
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to create art that inspires and captivates!"{" "}
          </p>
          <footer className="blockquote-footer">Pavan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
