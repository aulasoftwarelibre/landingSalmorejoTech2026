import Image from "next/image";
import styles from "./footer.module.css";

export default function footer() {
  return (
    <div className={styles.main}>
      <div className={styles.footer}>

        <div className={styles.info}>
          <p className={styles.text}>Organiza:</p>
          <Image src={"/logoAula.png"} alt="logoAula" width={236} height={236} />   {/** ¡¡¡ta mal el logo!!! */}
          <div>
            
          </div>
        </div>

        <div className={styles.textContainer}>
          <p className={styles.text}>
            ¡Encuéntranos!
            aulasoftwarelibre@uco.es
             Aulario Averroes
             <br />
            (Campus de Rabanales)
          </p>
        </div>

      </div>      
    </div>
  );
}
