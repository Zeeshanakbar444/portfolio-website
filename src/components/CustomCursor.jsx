import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './CustomCursor.css'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (window.innerWidth < 769) {
      return
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      const target = e.target
      const hoverableSelectors = 'a, button, .project-card, input, textarea, .btn, .nav-link, .social-link'
      const isHoverable = target.matches(hoverableSelectors) || 
                         target.closest(hoverableSelectors) !== null
      setIsHovering(isHoverable)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
        className={`cursor-outline ${isHovering ? 'hover' : ''}`}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />
    </>
  )
}

export default CustomCursor

