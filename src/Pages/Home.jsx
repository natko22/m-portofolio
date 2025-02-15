import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 50 }} // Starts invisible & lower
      animate={{ opacity: 1, y: 0 }} // Fades in & moves up
      transition={{ duration: 1, ease: "easeOut" }} // Smooth effect
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Manto Kamari
      </motion.h1>
    </motion.div>
  );
}

export default Home;
