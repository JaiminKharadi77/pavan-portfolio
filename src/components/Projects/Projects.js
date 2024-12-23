import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// const grdiveData = [
//   {
//     videoUrl:
//       "https://drive.google.com/file/d/1XL4myEQOWC6Zl7-fI2lF0wXlHDRWqj4w/view?usp=drive_link",
//     title: "Akshar Dental Promo Video",
//     description:
//       "A promotional video showcasing Akshar Dental services, highlighting key treatments and the clinic's features.",
//   },
//   {
//     videoUrl:
//       "https://drive.google.com/file/d/1JhVg3NEaXtLPkXCZy6jytoVdx0LuM4w4/view?usp=drive_link",
//     title: "Humanec Employee Tracking Reel",
//     description:
//       "A dynamic reel showcasing Humanec's employee tracking features, perfect for business presentations and marketing.",
//   },
//   {
//     videoUrl:
//       "https://drive.google.com/file/d/1SWkBEWLuC6PpuRSxvfLPirHd8aKIdpW1/view?usp=drive_link",
//     title: "Humanec AI Showcase",
//     description:
//       "A detailed reel demonstrating Humanec's AI capabilities, offering insights into the innovative solutions it provides.",
//   },
//   {
//     videoUrl:
//       "https://drive.google.com/file/d/1d3B7346upTbTrniTWcK3Rh-AaYnqgKEl/view?usp=drive_link",
//     title: "Marbel Stop Motion Animation",
//     description:
//       "A captivating stop-motion animation reel featuring Marbel's creative designs, perfect for visual storytelling.",
//   },
//   {
//     videoUrl:
//       "https://drive.google.com/file/d/1BLiBAapgm4uJJfH0c2rZOm_Og0PGxS_T/view?usp=drive_link",
//     title: "Millenium Marbel Advertisement",
//     description:
//       "An engaging advertisement reel showcasing the Millenium Marbel products, emphasizing their uniqueness and quality.",
//   },
//   {
//     videoUrl:
//       "https://drive.google.com/file/d/1X1FLfbE03Dqs0x320YBQju1B5tKvwTQU/view?usp=drive_link",
//     title: "Miracle Salon Christmas Special",
//     description:
//       "A festive Christmas special reel for Miracle Salon, highlighting holiday offers and seasonal promotions.",
//   },
//   {
//     videoUrl:
//       "https://drive.google.com/file/d/17gQKgCChx-FJdjEw1NDCMXOcuR6i2CR9/view?usp=drive_link",
//     title: "Xira CGI Services Portfolio",
//     description:
//       "A reel showcasing Xira's high-quality CGI services, featuring stunning visual effects and 3D animation work.",
//   },
//   {
//     videoUrl:
//       "https://drive.google.com/file/d/1XS3qRQwnaOjVb5zhWKXO0fwL7SpEwDt0/view?usp=drive_link",
//     title: "Xira Diwali Celebration Reel",
//     description:
//       "A vibrant reel capturing the spirit of Diwali through Xira's innovative visuals, celebrating the festival of lights.",
//   },
//   {
//     videoUrl:
//       "https://drive.google.com/file/d/1JhVg3NEaXtLPkXCZy6jytoVdx0LuM4w4/view?usp=drive_link",
//     title: "Xira Services Highlights",
//     description:
//       "An informative reel showcasing the diverse services offered by Xira, with a focus on creativity and client satisfaction.",
//   },
//   {
//     videoUrl:
//       "https://drive.google.com/file/d/1PkgRgVD_D8AXqxBuft5D6HA8iTGF_Cqq/view?usp=drive_link",
//     title: "Xira Services Final Showcase",
//     description:
//       "A final showcase reel summarizing Xira's top services, highlighting key projects and customer testimonials.",
//   },
// ];

const projectData = [
  {
    videoUrl: "https://www.youtube.com/watch?v=QL0VbToZbCU",
    description: "Akshar dental clinic 25 years anniversary",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=gmlfQP2v-Cw",
    description: "glazers games office reveal video",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=HE937xDZ-D4",
    description: "sosiyo drink product edit",
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
  {
    videoUrl: "https://www.youtube.com/shorts/e9bkb-8XmNI",
    description: "CGI Composition for learning",
  },
];

const dreamHackData = [
  {
    videoUrl: "https://www.youtube.com/watch?v=O4l25b_kksM",
    description:
      "An extended video featuring vibrant scenes and thrilling action from DreamHack.",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=O4l25b_kksM",
    description: "Vlog Edit",
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
  {
    videoUrl: "https://www.youtube.com/watch?v=sjpiKzl55r0",
    description: "Dream Hack Velocity edit",
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
          projects={[...projectData]}
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
