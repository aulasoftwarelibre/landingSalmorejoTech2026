import Image from "next/image";
import styles from "./footer.module.css";

export default function footer() {
  return (
    <div className="bg-transparent">
      <p className={styles.text}>This is the Footer</p>
    </div>
  );
}
