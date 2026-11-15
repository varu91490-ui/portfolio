import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * SectionSlide: PowerPoint-inspired subtle slide-and-reveal wrapper.
 * Gives each section an elegant presentation-grade entrance as it enters the viewport.
 */
export const SectionSlide = ({ 
  children, 
  id, 
  className = "", 
  delay = 0,
  stagger = false 
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Gentle, crisp slide motion (350-500ms) with elegant cubic bezier
  const variants = {
    hidden: { 
      opacity: shouldReduceMotion ? 1 : 0, 
      y: shouldReduceMotion ? 0 : 28 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0 : 0.5, 
        ease: [0.16, 1, 0.3, 1],
        delay: shouldReduceMotion ? 0 : delay,
        when: stagger ? "beforeChildren" : undefined,
        staggerChildren: stagger ? 0.08 : undefined
      }
    }
  };

  return (
    <motion.section
      id={id}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      className={`scroll-mt-24 transition-colors ${className}`}
    >
      {children}
    </motion.section>
  );
};

export const SlideItem = ({ children, className = "", delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: { 
      opacity: shouldReduceMotion ? 1 : 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0 : 0.45, 
        ease: [0.16, 1, 0.3, 1],
        delay: shouldReduceMotion ? 0 : delay
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionSlide;
