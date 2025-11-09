import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'
import zee from "../../public/zee.png"
// Constants - moved outside component for better performance
const FULL_TEXT = "I'm a Developer"
const NAME = "Zeeshan Akbar"

// Option 1: Image from public folder (use absolute path)
// const PROFILE_IMAGE = '/profile-image.jpg'

// Option 2: Import image from assets folder (recommended for optimization)
// import profileImageSrc from '../assets/profile-image.jpg'
// Then use: src={profileImageSrc}

// Currently using placeholder - replace with your image path
// const PROFILE_IMAGE = '/zee.png' // Change this to your profile image path

const Home = () => {
  const [displayText, setDisplayText] = useState('')
  const [imageError, setImageError] = useState(false)

  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
      xMovement: (Math.random() - 0.5) * 20,
    }))
  }, [])

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < FULL_TEXT.length) {
        setDisplayText(FULL_TEXT.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      className="home page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="particles-background">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, particle.xMovement, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="home-container">
        <div className="home-content">
          <motion.div
            className="home-left"
            variants={itemVariants}
          >
            <motion.div
              className="profile-image-container"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="profile-glow" />
              <div className="profile-image">
                {!imageError ? (
                  <img 
                    src={zee} 
                    alt={`${NAME} - Profile`}
                    loading="lazy"
                    onError={() => setImageError(true)}
                    onLoad={() => setImageError(false)}
                  />
                ) : (
                  <div className="profile-placeholder" aria-label="Profile placeholder">
                    <span>{NAME.charAt(0)}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="home-right"
            variants={itemVariants}
          >
            <motion.h1
              className="home-title"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm <span className="name-highlight">{NAME}</span>
            </motion.h1>

            <motion.h2
              className="home-subtitle"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {displayText}
              <span className="cursor-blink">|</span>
            </motion.h2>

            <motion.p
              className="home-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to my portfolio! I'm passionate about creating beautiful,
              functional, and user-friendly web experiences. Explore my work and
              let's build something amazing together.
            </motion.p>

            <motion.div
              className="home-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/projects">
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home

