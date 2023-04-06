import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/react_pro.jpg";
import chatify from "../../Assets/Projects/news.jpg";
import bitsOfCode from "../../Assets/Projects/chat.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="News_API"
              description="Website to display news articles related to India. Articles are divided into categories using tabs
              and navbar. Uses APIs provided by newsapi.org."
              ghLink="https://github.com/himanshu042001/News_API_Project"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="React Chat App"
              description="Chat app made by using React Js"
              ghLink="https://github.com/himanshu042001/REACT-CHAT-APP"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="React Projects"
              description="This Project is made by using React JS and Styled Components . This Project contains several simple projects made by using react js and styled components "
              ghLink="https://github.com/himanshu042001/react-project"
                           
            />
          </Col>



          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
