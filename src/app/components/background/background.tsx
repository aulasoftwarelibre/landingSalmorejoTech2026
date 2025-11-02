import { motion } from "framer-motion";
import styles from "./background.module.css";

export default function BackgroundSticky() {
  return (
    <motion.div
      className={styles.fondo}
      initial={{ scale: 1 }}
      animate={{ scale: 1.25 }}
      transition={{ duration: 1.25}}
      aria-hidden
    />
  );
}
