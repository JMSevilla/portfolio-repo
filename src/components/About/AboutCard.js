import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jose Miguel Sevilla </span>
            from <span className="purple"> Calamba Laguna, Philippines.</span>
            <br />I am a Senior Software Engineer at MDI Novare Technologies Incorporation.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Driving
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “My Arsenals will be awaken once i got a client.”{" "}
          </p>
          <footer className="blockquote-footer">JM</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
