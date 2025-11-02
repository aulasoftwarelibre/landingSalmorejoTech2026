import Image from "next/image";
import styles from "./navbar.module.css";

export default function navbar() {
  return (
    <div className="bg-transparent">
      <p className={styles.text}>This is the Navbar</p>
    </div>
  );
}
