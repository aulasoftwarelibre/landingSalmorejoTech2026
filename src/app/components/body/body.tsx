import Image from "next/image";
import styles from "./body.module.css";

const IMAGE_WIDTH = 1508;
const IMAGE_HEIGHT = 241;

export default function body() {
  return (
    <div className={styles.container}>
      <div className={styles.fondo}>
        <div className={styles.image}>
          <Image
            src="/d37f886165abba69b34b989cc286df9138bc451b.png"
            alt="Logo SalmorejoTech"
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            priority
          />
        </div>
        <p className={styles.text}>
          LA CITA DE LA TECNOLOGÍA CÓRDOBESA REGRESA CON UNA ENERGÍA IMPARABLE
        </p>
        <button
          className={styles.miboton}
          onClick={() =>
            (window.location.href =
              "https://docs.google.com/forms/d/e/1FAIpQLSdNOP1mYrdZi2WQhaiZ-nMbRqYowmwW1T4RYTBlrnShJ-ukxA/viewform?usp=dialog")
          }
        >
          CALL4PAPER
        </button>
      </div>
    </div>
  );
}
