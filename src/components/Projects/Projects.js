import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ShortFormatModal from "./Components/Modal";
import ImgCard from "./Components/ImgCard";
import ShortsImage from "../../Assets/short.f9548875e473fc0c4c76.jpg";
import DreamHackImage from "../../Assets/dreamhack.25c36bffe50ad847360f.jpg";
import LongWorkImage from "../../Assets/download.jpg";

const projectData = [
  {
    videoUrl: "https://www.youtube.com/watch?v=HE937xDZ-D4",
    description: "sosiyo drink product edit",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=QL0VbToZbCU",
    description: "Akshar dental clinic 25 years anniversary",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=gmlfQP2v-Cw",
    description: "glazers games office reveal video",
  },

  {
    videoUrl: "https://www.youtube.com/watch?v=RsqjneWltgs",
    description: "College Rivals After Movie",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=m9tYkC-qSMU",
    description: "VFX Showreel Fx school",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=mbcCsZIo06Y",
    description: "3d Caster Desk",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=zHNhMwQU1cM",
    description: "Rooter 2d map animation",
  },
];

const dataReels = [
  {
    videoUrl: "https://www.youtube.com/shorts/e9bkb-8XmNI",
    description: "CGI Composition for learning",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=i6KC6nF4-yM",
    description: "Valorant Lan Event Reel",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=vM0jHSlK4dw",
    description: "Valorant Lan Event Reel",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=IYWSYvSIk44",
    description: "shorts interview",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=6ZCjk5e8lKQ",
    description: "Vlog Edit Reel",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=gudilElIAas",
    description: "Valorant After movie edit Reel",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=4RVS25yMiBo",
    description: "Music Event Reel Edit",
  },
  {
    videoUrl: "https://www.youtube.com/shorts/yVbNbvmeGlU",
    description: "College Rivals Finals Promo Reel Edit",
  },
  {
    videoUrl: "https://www.youtube.com/shorts/cWNMYrypQfI",
    description: "Wedding Work",
  },
  {
    videoUrl: "https://www.youtube.com/shorts/RLhp2Rdrx_k",
    description: "Diwali Reel",
  },
  {
    videoUrl: "https://www.youtube.com/shorts/QHtSojejQ70",
    description: "saloon reel",
  },
  {
    videoUrl: "https://www.youtube.com/shorts/OCMnKUwIjw0",
    description: "Motion Graphic Reel",
  },
  {
    videoUrl: "https://www.youtube.com/shorts/klg_Z9lafxo",
    description: "3d Tracking Reel",
  },
  {
    videoUrl: "https://www.youtube.com/shorts/0KN6N0cR2eI",
    description: "CGI Compositing reel",
  },
  {
    videoUrl: "https://www.youtube.com/shorts/NZfxJS2r9cc",
    description: "Marble reel",
  },
  {
    videoUrl: "https://www.youtube.com/shorts/4ff-Qtwk2V8",
    description: "2d pacman animation",
  },
];

const dreamHackData = [
  {
    videoUrl: "https://www.youtube.com/watch?v=sjpiKzl55r0",
    description: "Dream Hack Velocity edit",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=O4l25b_kksM",
    description:
      "An extended video featuring vibrant scenes and thrilling action from DreamHack.",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=YfcHkbsvd0E",
    description: "POV OF Dream Hack Reel",
  },
  {
    videoUrl: "https://www.youtube.com/shorts/hhSEwKQwLfg",
    description: "Dream hack Boot Reel",
  },
  {
    videoUrl: "https://www.youtube.com/shorts/NX395c1aT3E",
    description: "Dream hack Content",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=jlR562b-BS4",
    description: "Dream hack Velocity Edit Reel",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=lcR04XjU35s",
    description: "Dream Day 3 vlog teaser reel",
  },
];

const ProjectSection = ({ heading, projects, spanText = "" }) => (
  <>
    <h1
      style={{
        color: "white",
        fontSize: "2.3em",
        fontWeight: 700,
        paddingTop: "10px",
      }}
    >
      {heading} <strong className="purple">{spanText}</strong>
    </h1>
    <Row style={{ justifyContent: "start", paddingBottom: "10px" }}>
      {projects.map((project, index) => (
        <Col md={4} className="project-card" key={index}>
          <ProjectCard
            videoUrl={project.videoUrl}
            title={project.title}
            description={project.description}
          />
        </Col>
      ))}
    </Row>
  </>
);

function Projects() {
  const [modals, setModals] = useState({
    modalOpen: false,
    dreamhackModal: false,
    longformatWork: false,
  });

  const toggleModal = (modalName) => {
    setModals((prev) => ({
      ...prev,
      [modalName]: !prev[modalName],
    }));
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Grid2 container spacing={2} justifyContent="space-around">
          <Grid2 item xs={12} sm={6} md={3}>
            <ImgCard
              imageUrl={LongWorkImage}
              title={"Long Work"}
              onClick={() => toggleModal("longformatWork")}
            />
          </Grid2>
          <Grid2 item xs={12} sm={6} md={3}>
            <ImgCard
              imageUrl={ShortsImage}
              title={"Shorts Work"}
              onClick={() => toggleModal("modalOpen")}
            />
          </Grid2>{" "}
          <Grid2 item xs={12} sm={6} md={3}>
            <ImgCard
              imageUrl={DreamHackImage}
              title={"Dream Hack"}
              onClick={() => toggleModal("dreamhackModal")}
            />
          </Grid2>{" "}
        </Grid2>
        <ShortFormatModal
          open={modals.modalOpen}
          title={"Short Format Work"}
          onClose={() => toggleModal("modalOpen")}
          dataReels={dataReels}
        />{" "}
        <ShortFormatModal
          open={modals.longformatWork}
          title={"Long Format Work"}
          onClose={() => toggleModal("longformatWork")}
          dataReels={projectData}
        />
        <ShortFormatModal
          open={modals.dreamhackModal}
          title={"Dream Hack"}
          onClose={() => toggleModal("dreamhackModal")}
          dataReels={dreamHackData}
        />
      </Container>
    </Container>
  );
}

export default Projects;
