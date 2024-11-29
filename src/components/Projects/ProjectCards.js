import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCards = ({
  videoUrl,
  title,
  description,
  ghLink,
  demoLink,
  isBlog,
}) => (
  <Card className="project-card-view">
    <div
      className="video-wrapper"
      style={{ position: "relative", paddingTop: "56.25%" }}
    >
      <ReactPlayer
        url={videoUrl}
        className="react-player"
        style={{ position: "absolute", top: 0, left: 0 }}
        width="100%"
        height="100%"
        controls
      />
    </div>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
      {/* <div>
        <Button variant="primary" href={ghLink} target="_blank">
          <BsGithub /> &nbsp; {isBlog ? "Blog" : "GitHub"}
        </Button>
        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </div> */}
    </Card.Body>
  </Card>
);

ProjectCards.defaultProps = {
  videoUrl: "https://www.youtube.com/watch?v=5X8VwQqjTtQ", // Default YouTube embed link
  title: "Project Title",
  description: "Project Description",
  ghLink: "#",
  demoLink: null,
  isBlog: false,
};

export default ProjectCards;
