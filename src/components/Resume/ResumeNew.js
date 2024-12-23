import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/pavan-resume.pdf";
import pdfPreviewImage from "../../Assets/pdf_preview_image.png";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  return (
    <div>
      <Container
        fluid
        className="resume-section d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh" }} // Ensures full-page centering
      >
        <Particle />

        {/* First Button */}
        <Row className="justify-content-center mb-4">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Image */}
        <Row className="justify-content-center mb-4">
          <img
            src={pdfPreviewImage}
            alt="pdf preview"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Row>

        {/* Second Button */}
        <Row className="justify-content-center">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
