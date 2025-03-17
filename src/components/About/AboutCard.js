import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rhydham Prajapati</span> from{" "}
            <span className="purple">Los Angeles, CA, USA.</span>
            <br /><br />
            <ul>
            <li>I am in my final semester of Master's in Engineering Management at California State University, Northridge.</li>
            <li>Completed Undergrad in Electronics and Commmunication Engineering from Nirma University, India.</li>
          </ul>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football, Cricket and Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring and making new Food Dishes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling, Working-out and Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life Mantra: Lead with passion, adapt with strategy, and never stop exploring, be it new ideas, new places, or new challenges."{" "}
          </p>
          <footer className="blockquote-footer">Rhydham Prajapati</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
