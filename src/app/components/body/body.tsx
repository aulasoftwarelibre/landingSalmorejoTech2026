import Image from "next/image";
import logo from "/public/d37f886165abba69b34b989cc286df9138bc451b.png"
import styles from "./body.module.css";
import { style } from "framer-motion/client";

const IMAGE_WIDTH = 1508;
const IMAGE_HEIGHT = 241;

export default function body() {

  return (
    

    <div className={styles.fondo}>
      <button className={styles.miboton}>
        CALL4PAPER
      </button>
      <div className={styles.imagenConFiltro}>
        <Image 
          src="/d37f886165abba69b34b989cc286df9138bc451b.png" 
          alt="Imagen con filtro de desenfoque" 
          width={IMAGE_WIDTH} 
          height={IMAGE_HEIGHT}
          priority 
        />
      </div>
      <p className={styles.text}>
      LA CITA DE LA TECNOLOGÍA CÓRDOBESA REGRESA CON UNA ENERGÍA IMPARABLE
</p>
    </div>
  );
}


