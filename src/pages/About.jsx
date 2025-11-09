import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const skills = [
    { name: "React", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "Bootstaps", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "CSS", level: 90 },
    { name: "MongoDb", level: 70 },
    { name: "Mysql", level: 70 },
    { name: "c/c++ and java", level: 70 },
    { name: "Git", level: 85 },
  ];

  const experiences = [
   
    {
      year: "2025 - 2026",
      title: "Frontend Developer",
      company: "online",
      description:
        "Developed responsive web applications using React and modern JavaScript.",
    },
    {
      year: "2015 - 2026",
      title: "Junior Developer",
      company: "Startup online",
      description:
        "Built and maintained web applications, learned modern development practices.",
    },
  ];

  const education = [
    {
      year: "2023 - till 2027",
      title: "Bachelor of Science in Computer Science",
      institution: "Sindh Madressatul Islam University",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      className="about page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="about-container">
        <motion.section className="about-section" variants={itemVariants}>
          <h1 className="section-title">About Me</h1>
          <p className="about-description">
            Hi, I’m Zeeshan Akbar — a passionate MERN Stack Developer who loves
            turning ideas into interactive, high-performing web applications. I
            specialize in building modern, scalable, and user-friendly solutions
            using MongoDB, Express.js, React, and Node.js. With a strong eye for
            design and a deep understanding of backend logic, I bridge the gap
            between functionality and aesthetics to deliver seamless digital
            experiences. I’m always exploring the latest technologies to write
            clean, efficient code and solve real-world problems through
            innovation. When I’m not coding, you’ll find me learning new
            frameworks or refining my existing skills to stay ahead in this
            ever-evolving tech world.
          </p>
          <p className="about-description">
            When I'm not coding, I’m actively working on multiple online
            projects, applying my skills to build practical solutions and
            enhance my development experience.
          </p>
        </motion.section>

        <motion.section className="about-section" variants={itemVariants}>
          <h2 className="section-subtitle">Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="about-section" variants={itemVariants}>
          <h2 className="section-subtitle">Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="timeline-year">{exp.year}</span>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="about-section" variants={itemVariants}>
          <h2 className="section-subtitle">Education</h2>
          <div className="timeline">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="timeline-year">{edu.year}</span>
                  <h3 className="timeline-title">{edu.title}</h3>
                  <p className="timeline-company">{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;
