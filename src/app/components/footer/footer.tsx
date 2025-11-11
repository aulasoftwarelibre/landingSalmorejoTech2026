import Image from "next/image";
import styles from "./footer.module.css";

interface RRSS{
  id: number;
  image: string;
  alt: string;
  url: string;
}

const socials: RRSS[] =  [
  {
    id: 1,
    image: "/facebookLogo.png",
    alt: "facebook logo",
    url: "https://www.facebook.com/AulaSoftwareLibre/"
  },
  {
    id: 2,
    image: "/instaLogo.png",
    alt: "instagram logo",
    url: "https://www.instagram.com/aulasoftwarelibre/?hl=es"
  },
  {
    id: 3,
    image: "/telegramLogo.png",
    alt: "telegram logo",
    url: "https://t.me/AulaSoftwareLibreUCO"
  },
  {
    id: 4,
    image: "/linkedinLogo.png",
    alt: "linkedin logo",
    url: "https://www.linkedin.com/company/aulasoftwarelibre/posts/?feedView=all"
  },
  {
    id: 5,
    image: "/twitterLogo.png",
    alt: "twitter logo",
    url: "https://x.com/aulasl"
  },
  {
    id: 6,
    image: "/githubLogo.png",
    alt: "github logo",
    url: "https://github.com/aulasoftwarelibre"
  },
  {
    id: 7,
    image: "/youtubeLogo.png",
    alt: "youtube logo",
    url: "https://www.youtube.com/c/AulaSoftwareLibre"
  }
]

export default function footer() {
  return (
    <div className={styles.main}>
      <div className={styles.footer}>

        <div className={styles.info}>
          <p className={styles.text}>Organiza:</p>
          <Image src={"/logoAula.png"} alt="logoAula" width={236} height={236} />
          <div className={styles.rrssContainer}>
            {socials.map((social) => (
              <div key={social.id}>
                <a href={social.url}>
                  <Image src={social.image} alt={social.alt} width={50} height={50} className={`${styles.image} ${styles.aslLink}`}/>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.textContainer}>
          <p className={styles.text}>
            ¡Encuéntranos!
            <a href="https://www.uco.es/aulasoftwarelibre/bienvenidos-al-aula/" className={styles.aslLink}>
              Aulasoftwarelibre@uco.es
            </a>
             Aulario Averroes
             <br />
            (Campus de Rabanales)
          </p>
        </div>

      </div>
      <div className={styles.merch}>
        <p className={styles.merchText}>© 2025 Aula Software Libre</p>
      </div> 
    </div>
  );
}
