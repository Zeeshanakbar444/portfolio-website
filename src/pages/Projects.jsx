import { motion } from "framer-motion";
import "./Projects.css";
import pot from "../../public/pot.png"
import blocktopia from "../../public/blocktopia.jfif"
import blog from "../../public/blog.avif"
import ecommerce from "../../public/ecommerce.jfif"
import event from "../../public/event.jfif"
import weather from "../../public/download.jfif"
const Projects = () => {
  let arr = [ecommerce,event,weather,blog,pot,blocktopia];
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: {ecommerce},
      link: "https://github.com/Zeeshanakbar444/ecommerce-project#:~:text=Public-,Pin,0,-Zeeshanakbar444/ecommerce%2Dproject",
      tags: ["React", "Node.js", "MongoDB", "express.js"],
    },
    {
      id: 2,
      title: "Event Management App",
      description:
        "A collaborative event management platform with real-time updates, intuitive drag-and-drop scheduling, and seamless team coordination.",
      image: "../../public/event.jfif",
      link: "https://github.com/Zeeshanakbar444/MERN_EVENT_MANAGMENT_SYSTEM",
      tags: ["React", "api", "javascript", "tailwind"],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "../../public/download.jfif",
      link: "https://clone-gules-psi.vercel.app/",
      tags: ["React", "API", "javascript"],
    },
    {
      id: 4,
      title: "Blogging web App",
      description:
        "Share your stories, connect with readers, and build your online presence — all in one simple blogging platform.",
      image:
        "../../public/blog.avif",
      link: "https://github.com",
      tags: ["React", "node","MongoDB", "Express"],
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills. Features smooth animations and modern design.",
      image:
        "../../public/pot.png",
      link: "https://github.com/Zeeshanakbar444/portfolio-website",
      tags: ["React", "Framer Motion", "CSS"],
    },
    {
      id: 6,
      title: "Bloktopia Website Clone",
      description:
        "A clean and modern blogging website built with HTML and CSS, featuring easy-to-read posts and an organized layout.",
      image:
        "../../public/blocktopia.jfif",
      link: "https://zeeshanakbar444.github.io/bloktopia-clone/",
      tags: ["Html", "CSS"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="projects page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">My Projects</h1>
          <p className="projects-subtitle">
            Here are some of my recent projects. Each one represents a unique
            challenge and an opportunity to learn and grow as a developer.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map(( project,id) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="project-image-container">
                <img
                  src={arr[id]}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    View Project →
                  </motion.a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
