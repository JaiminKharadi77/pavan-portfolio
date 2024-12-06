import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const grdiveData = [
  {
    videoUrl:
      "https://drive.google.com/file/d/1XL4myEQOWC6Zl7-fI2lF0wXlHDRWqj4w/view?usp=drive_link",
    title: "Akshar Dental Promo Video",
    description:
      "A promotional video showcasing Akshar Dental services, highlighting key treatments and the clinic's features.",
  },
  {
    videoUrl:
      "https://drive.google.com/file/d/1JhVg3NEaXtLPkXCZy6jytoVdx0LuM4w4/view?usp=drive_link",
    title: "Humanec Employee Tracking Reel",
    description:
      "A dynamic reel showcasing Humanec's employee tracking features, perfect for business presentations and marketing.",
  },
  {
    videoUrl:
      "https://drive.google.com/file/d/1SWkBEWLuC6PpuRSxvfLPirHd8aKIdpW1/view?usp=drive_link",
    title: "Humanec AI Showcase",
    description:
      "A detailed reel demonstrating Humanec's AI capabilities, offering insights into the innovative solutions it provides.",
  },
  {
    videoUrl:
      "https://drive.google.com/file/d/1d3B7346upTbTrniTWcK3Rh-AaYnqgKEl/view?usp=drive_link",
    title: "Marbel Stop Motion Animation",
    description:
      "A captivating stop-motion animation reel featuring Marbel's creative designs, perfect for visual storytelling.",
  },
  {
    videoUrl:
      "https://drive.google.com/file/d/1BLiBAapgm4uJJfH0c2rZOm_Og0PGxS_T/view?usp=drive_link",
    title: "Millenium Marbel Advertisement",
    description:
      "An engaging advertisement reel showcasing the Millenium Marbel products, emphasizing their uniqueness and quality.",
  },
  {
    videoUrl:
      "https://drive.google.com/file/d/1X1FLfbE03Dqs0x320YBQju1B5tKvwTQU/view?usp=drive_link",
    title: "Miracle Salon Christmas Special",
    description:
      "A festive Christmas special reel for Miracle Salon, highlighting holiday offers and seasonal promotions.",
  },
  {
    videoUrl:
      "https://drive.google.com/file/d/17gQKgCChx-FJdjEw1NDCMXOcuR6i2CR9/view?usp=drive_link",
    title: "Xira CGI Services Portfolio",
    description:
      "A reel showcasing Xira's high-quality CGI services, featuring stunning visual effects and 3D animation work.",
  },
  {
    videoUrl:
      "https://drive.google.com/file/d/1XS3qRQwnaOjVb5zhWKXO0fwL7SpEwDt0/view?usp=drive_link",
    title: "Xira Diwali Celebration Reel",
    description:
      "A vibrant reel capturing the spirit of Diwali through Xira's innovative visuals, celebrating the festival of lights.",
  },
  {
    videoUrl:
      "https://drive.google.com/file/d/1JhVg3NEaXtLPkXCZy6jytoVdx0LuM4w4/view?usp=drive_link",
    title: "Xira Services Highlights",
    description:
      "An informative reel showcasing the diverse services offered by Xira, with a focus on creativity and client satisfaction.",
  },
  {
    videoUrl:
      "https://drive.google.com/file/d/1PkgRgVD_D8AXqxBuft5D6HA8iTGF_Cqq/view?usp=drive_link",
    title: "Xira Services Final Showcase",
    description:
      "A final showcase reel summarizing Xira's top services, highlighting key projects and customer testimonials.",
  },
];

const projectData = [
  {
    videoUrl: "https://www.youtube.com/watch?v=HE937xDZ-D4",
    description:
      "A visually stunning product edit for Sosiyo, highlighting its vibrant appeal.",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=gmlfQP2v-Cw",
    description:
      "A dynamic montage edit for Glazer Studio, showcasing creative highlights.",
  },
  {
    videoUrl: "https://youtu.be/RsqjneWltgs",
    description:
      "A captivating 1-minute aftermovie capturing the intense rivalry of College Rivals.",
  },

  {
    videoUrl: "https://youtu.be/6ZCjk5e8lKQ",
    description:
      "A fun and engaging vlog edit, bringing moments to life with style.",
  },

  {
    videoUrl: "https://youtu.be/mbcCsZIo06Y",
    description:
      "An engaging edit for the Gamerji caster desk, emphasizing the competitive spirit.",
  },
  {
    videoUrl: "https://youtu.be/zHNhMwQU1cM",
    description:
      "A sleek 2D route animation for 1xBet, featuring smooth editing work.",
  },
  {
    videoUrl: "https://youtu.be/l_6sNsNtn6U",
    description:
      "A powerful promo edit for Godlike, capturing epic moments with intensity.",
  },
];

const dataReels = [
  {
    videoUrl: "https://www.youtube.com/shorts/hhSEwKQwLfg",
    description:
      "An exciting edited teaser showcasing highlights from the 7seas bootcamp, full of energy and action.",
  },
  {
    videoUrl: "https://www.youtube.com/shorts/xhhCosx0YQU",
    description:
      "Another thrilling teaser from the 7seas bootcamp, capturing key moments of intense preparation.",
  },
  {
    videoUrl: "https://www.youtube.com/shorts/Yev85MITJ44",
    description:
      "A first-person perspective reel that brings the excitement of DreamHack to life.",
  },
  {
    videoUrl: "https://youtube.com/shorts/_ve6J9rpRcw?si=yhuzdgzD6WONDD7m",
    description:
      "A slow-motion edit of Angelina X Savage Girl exuding a fierce and badass vibe.",
  },
  {
    videoUrl: "https://youtube.com/shorts/yVbNbvmeGlU?si=bBPHL1G30vLi06NJ",
    description:
      "An energetic promo reel ad for the College Rivals Finale, packed with excitement.",
  },
  {
    videoUrl: "https://youtu.be/m9tYkC-qSMU",
    description:
      "An impressive VFX showreel from FX School, highlighting cutting-edge visuals.",
  },
  {
    videoUrl: "https://www.youtube.com/shorts/NX395c1aT3E",
    description:
      "A mesmerizing slow-motion dance edit featuring Angelina X Savage Girl, full of grace and style.",
  },
];

const dreamHackData = [
  {
    videoUrl: "https://www.youtube.com/watch?v=O4l25b_kksM",
    description:
      "An extended video featuring vibrant scenes and thrilling action from DreamHack.",
  },
];

const ProjectSection = ({ heading, projects, spanText = "" }) => (
  <>
    <h1
      className=""
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
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <ProjectSection
          heading="My Recent"
          projects={[...grdiveData, ...projectData]}
          spanText="Projects"
        />
        <ProjectSection
          heading="Dream"
          projects={dreamHackData}
          spanText="Hack"
        />
        <ProjectSection
          heading="Short Format"
          projects={dataReels}
          spanText="Work"
        />
      </Container>
    </Container>
  );
}

export default Projects;
