import React from "react";
import { motion, useScroll } from "framer-motion";
const Loader = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 right-0 left-0 z-50 w-full transform origin-left bg-cyan-400 h-1 block"
    ></motion.div>
  );
};

export default Loader;
