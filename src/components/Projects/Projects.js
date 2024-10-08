import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import burger from "../../Assets/Projects/burgermania.png";
import suicide from "../../Assets/Projects/suicide.png";
import mdr from "../../Assets/Projects/mdrorig.png";

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
              imgPath={burger}
              isBlog={false}
              title="Point Of Sales and Inventory System | Burger Mania"
              description="Used to manage all the products and track all the sales accurately. This system took 4 months of development and was developed by me."
              ghLink="https://github.com/JMSevilla/burgerm_repo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mdr}
              isBlog={false}
              title="Modern Resolve"
              description="This is our website which is still under construction and maintained by me."
              ghLink="https://github.com/JMSevilla/modern_resolve_internal_project"
              demoLink="https://modernresolvedev.netlify.app/?fbclid=IwAR1Dm_JhZdcc1L5djXzW3rldwexXwFQUG9fnyb_ynm9BQnbfmnNkQrnKXDo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "http://www.gtcapital.com.ph/storage/uploads/2017/09/59bc94ce59565.png"
              }
              isBlog={false}
              title="Dynamic Forms | Metrobank"
              githide={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "http://www.gtcapital.com.ph/storage/uploads/2017/09/59bc94ce59565.png"
              }
              isBlog={false}
              title="Online Banking | Metrobank"
              githide={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://i0.wp.com/designfortomorrow.co/wp-content/uploads/2022/08/Bayad_Fintech_Philippines_branding_brand_identity_art_direction_bayad_center_old_logo_1-1.jpg?resize=1071%2C955&ssl=1"
              }
              isBlog={false}
              title="Bayad Center | Meralco"
              githide={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://i.imgur.com/Gl36JAd.jpg"}
              isBlog={false}
              title="Online Banking | BPI"
              githide={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://dev-nclexpower.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCoreZigma.59046c4f.png&w=256&q=75"
              }
              isBlog={false}
              title="NCLEX Power Multi-Integrated Systems"
              githide={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://upload.wikimedia.org/wikipedia/commons/9/91/Globe-logo.png"
              }
              isBlog={false}
              title="GCASH | Globe Telecom"
              githide={true}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
