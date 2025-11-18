"use client"
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./background.module.css";

export default function Background() {
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScroll(latest);
    });
    return () => unsubscribe();
  }, [scrollY]);

  if (scroll < 400) {
    return (
      <motion.div
        className={styles.fondo}
        initial={{ scale: 1 }}
        animate={{ scale: 1.25 }}
        transition={{ duration: 1.75 }}
        aria-hidden
      />
    );
  } else {
    return (
      <motion.div
        className={styles.fondo}
        initial={{ scale: 1.25 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.75 }}
        aria-hidden
      />
    );
  }
}
