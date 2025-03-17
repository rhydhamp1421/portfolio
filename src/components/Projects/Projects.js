import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              isBlog={false}
              title="Retail Sales Data Analysis"
              description="This retail sales analysis project examines sales trends, top products, customer behavior, and revenue generation to optimize business strategies. Using data from the Kaggle Walmart Sales Forecasting Competition, it analyzes transactions from three branches—Mandalay, Yangon, and Naypyitaw—identifying top-performing locations, sales patterns, and customer purchasing behavior to drive data-driven strategy improvements."
              ghLink="https://github.com/rhydhamp1421/Retail-Sales-Data-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="HR Data Analytics using Excel and Tableau"
              description="This HR Data Analytics Tableau project enables HR managers and business leaders to analyze employee data for informed decisions on retention, development, and recruitment. It features attrition trend tracking, demographic charts on employee distribution and attrition rates, and interactive filters for in-depth data exploration, providing key insights to optimize workforce strategies."
              ghLink="https://github.com/rhydhamp1421/HR-Data-Analytics"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Sales Insights using Power BI and SQL"
              description="I developed an interactive Power BI dashboard to visualize AtliQ hardware sales trends, helping stakeholders identify opportunities for a projected 7% revenue increase. By integrating SQL Server with Power BI and leveraging SQL and Power Query, I ensured efficient data extraction and cleaning. Additionally, I optimized data modeling with Power Pivot, enhancing dashboard performance and reporting efficiency for faster decision-making."
              ghLink="https://github.com/rhydhamp1421?tab=repositories"          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
