import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OverlayTrigger, Tooltip } from "react-bootstrap"; 

const SkillsList = () => {
  const skills = [`html`, `css`, `javascript`,`typescript`, `react`, `bootstrap`,`sass`, `tailwindcss`, `materialui`, `node`, `express`, `GraphQL`,`postgresql`, `firebase`, `MongoDB`,`git`, `php`, `mysql`, `wordpresss`];
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  const renderTooltip = (item) => (
    <Tooltip id={`button-tooltip-${item}`} placement="top" className="custom-tooltip">
      {item}
    </Tooltip>
  );

  return (
    <>
      <AnimatePresence>
        {skills.map((item, index) => (
          <OverlayTrigger
            key={index}
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip(item)} 
            className="custom-overlay-trigger"
          >
            <motion.img
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              delay={index * 10}
              transition={{ type: "spring", damping: 10, stiffness: 100 }}
              src={`/images/icons/${item}.svg`}
              alt={item} 
              className="skills-icon"
            />
          </OverlayTrigger>
        ))}
      </AnimatePresence>
    </>
  );
};

export default SkillsList;
