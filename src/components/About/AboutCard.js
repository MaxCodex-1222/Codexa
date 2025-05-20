import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Max Codex </span>
            from <span className="purple"> Roman, Romania.</span>
            <br />
            I am a dedicated and versatile full stack web developer with over 4 years of hands-on experience in building robust, user-focused applications.
            <br />
            With expertise in both frontend and backend technologies—including React, Vue.js, Node.js, PHP, and Django—Max bridges the gap between design and functionality.
            <br />
            I'm deeply familiar with database development using MongoDB and MySQL and is proficient in version control and collaboration using Git.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
