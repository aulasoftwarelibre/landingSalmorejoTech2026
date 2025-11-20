import styles from "./aboutUs.module.css";

export default function body() {
  return (
    <div className={styles.container}>
      <h1>
        <p className={styles.textAbout}>About Us</p>
      </h1>
      <p className={styles.text}>
        El Aula de Software Libre fue creada en 2006 con la unión de un grupo de
        estudiantes que tenían intereses parecidos.<br></br>
        <br></br>Hoy en día, se siguen manteniendo los pilares que en aquel
        momento se definieron:
      </p>
      <ul className={styles.textList}>
        <li>
          - Difundir el uso, creación y mantenimiento del software libre y el
          conocimiento abierto.
        </li>
        <li>
          - Ser un punto de encuentro y lugar para realizar proyectos,
          actividades, talleres, etc.
        </li>
        <li>
          - Incentivar el interés en la programación en la comunidad a través de
          proyectos y colaborativos.
        </li>
        <li>
          - Fomentar que los trabajos fin de grado se publiquen con licencia
          libre.
        </li>
        <li>
          - Velar por el uso de software libre y estándares abiertos en el
          ámbito de la Universidad.
        </li>
      </ul>
      <p className={styles.text}>
        El SalmorejoTech es el mayor evento tecnológico de Córdoba, con 7 años
        de organizción a nuestras espaldas.<br></br>
        <br></br>Contando con los ponentes de primer nivel en las empresas más
        punteras y con los que nos dedicamos a hablar de software, empresas,
        tecnología...<br></br>
        <br></br>Finalizando con nuestro famoso:
        <br></br>Networking = Food + New Friends
      </p>
    </div>
  );
}
