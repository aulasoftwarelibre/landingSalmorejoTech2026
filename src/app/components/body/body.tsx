import Image from "next/image";
import styles from "./body.module.css";

export default function body() {
  return (
    <div className="bg-transparent">
      <p className={styles.text}>This is the Body</p>
    </div>
  );
}
