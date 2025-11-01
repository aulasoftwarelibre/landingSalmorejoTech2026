import Image from "next/image";
import styles from "./body.module.css";

export default function body() {
  return (
    <div>
      <p className={styles.text}>This is the Body</p>
    </div>
  );
}
