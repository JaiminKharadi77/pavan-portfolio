import React from "react";
import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";

const ProjectCards = ({ videoUrl, title, description }) => {
  // Check if the URL is from Google Drive
  const isGoogleDrive = videoUrl.includes("drive.google.com");

  // Convert Google Drive URLs to the correct embed format
  const getEmbedUrl = (url) => {
    if (isGoogleDrive) {
      const fileIdMatch = url.match(/file\/d\/(.+?)\//);
      return fileIdMatch
        ? `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`
        : url;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <Card className="project-card-view">
      <div
        className="video-wrapper"
        style={{ position: "relative", paddingTop: "56.25%" }}
      >
        {isGoogleDrive ? (
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={title || "Google Drive Video"}
            style={{ position: "absolute", top: 0, left: 0 }}
          ></iframe>
        ) : (
          <ReactPlayer
            url={embedUrl}
            className="react-player"
            style={{ position: "absolute", top: 0, left: 0 }}
            width="100%"
            height="100%"
            controls
          />
        )}
      </div>
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        <Card.Text style={{ textAlign: "center" }}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
