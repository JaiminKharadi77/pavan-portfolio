import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/image-14x.png";
import Toolstack from "./Toolstack";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../Assets/../Assets/diplomavfx.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row
          style={{ justifyContent: "center", padding: "10px" }}
          className="d-flex flex-column-reverse flex-md-row"
        >
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">MY</strong> Graduation
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    I have completed my VFX graduation from{" "}
                    <span className="purple">Fx School</span>, located in the
                    scenic city of Manali,{" "}
                    <span className="purple">Bhubaneswar, India</span>.
                    <br />
                    <br />
                    My training at Fx School equipped me with the skills to
                    bring visual storytelling to life, combining creativity and
                    technical expertise.
                    <br />
                    <br />
                    I am currently employed as a software developer at Juspay,
                    but my passion for VFX and creative work continues to
                    inspire me in my coding journey.
                    <br />
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="about-img d-flex justify-content-center">
            <Document file={pdf}>
              <Page pageNumber={1} scale={0.6} />
            </Document>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        {/* <Github /> */}
        ``{" "}
      </Container>
    </Container>
  );
}

export default About;
