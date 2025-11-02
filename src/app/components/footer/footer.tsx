import Image from "next/image";
import styles from "./footer.module.css";

export default function footer() {
  return (
    <div>
      <p className={styles.text}>This is the Footer</p>
    </div>
  );
}
