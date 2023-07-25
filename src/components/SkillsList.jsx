import { motion, AnimatePresence } from "framer-motion";

const SkillsList = () => {
  const items = [`html`, `css`, `javascript`,`typescript`, `react`,  `bootstrap`,`sass`, `tailwindcss`, `materialui`, `node`, `express`, `graphQL2`,`postegresql`, `firebase`, `mongo`,`git`, ];
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

  return (
    <AnimatePresence>
          {items.map((item, index) => ( 
            <motion.img
              key={index}
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              delay={index * 10}
              transition={{ type: "spring", damping: 10, stiffness: 100 }}
              src={`/images/icons/${item}.svg`}
              className="skills-icon"
            />
          ))}
    </AnimatePresence>
  );
};

export default SkillsList;
