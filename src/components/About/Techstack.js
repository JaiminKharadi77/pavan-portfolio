import React from "react";
import { FaBezierCurve, FaLayerGroup } from "react-icons/fa";
import { MdTrackChanges, MdColorLens } from "react-icons/md";
import { GiFilmProjector, Gi3DGlasses } from "react-icons/gi";
import { RiMovie2Line } from "react-icons/ri";

import "./TechStack.css";
function Techstack() {
  const skills = [
    { icon: <MdTrackChanges />, title: "2D Tracking" },
    { icon: <Gi3DGlasses />, title: "3D Tracking" },
    { icon: <FaLayerGroup />, title: "Composition" },
    { icon: <MdColorLens />, title: "Color Grading" },
    { icon: <GiFilmProjector />, title: "CGI Composition" },
    { icon: <RiMovie2Line />, title: "Motion Graphics" },
  ];

  return (
    <div className="techstack-grid">
      {skills.map((skill, index) => (
        <div key={index} className="techstack-item">
          <div className="techstack-icon">{skill.icon}</div>
          <div className="techstack-title">{skill.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
