import { Container, Row } from "react-bootstrap";
import { Button } from "@mui/material";
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
        {/* Image */}
        <Row className="justify-content-center mb-4">
          <img
            src={pdfPreviewImage}
            alt="pdf preview"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Row>{" "}
        {/* First Button */}
        <Row className="justify-content-center mb-4">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8054A2",
              "&:hover": {
                backgroundColor: "#AD75D3", // Keep the same color on hover
              },
              color: "white !important", // Default text color
              "&:hover span": {
                color: "white !important", // Ensure the text color doesn't change on hover
              },
            }}
            color="primary"
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
