"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useState } from "react";

export default function navbar() {
  const [sliderStyle, setSliderStyle] = useState({
    opacity: 0, // Empieza oculto
    left: "0px",
    width: "0px",
    height: "0px",
  });

  function handleMouseEnter(e: any) { // esta funcion se dispara cuando pones el raton encima de el objeto
    const li = e.currentTarget; // El <li> sobre el que estás
    setSliderStyle({
      opacity: 1,
      left: `${li.offsetLeft}px`,
      width: `${li.offsetWidth}px`,
      height: `${li.offsetHeight}px`,
    });
  }

  function handleMouseLeave() { // esta se dispara cuando quitas el ratón.
    setSliderStyle({ ...sliderStyle, opacity: 0 });
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList} onMouseLeave={handleMouseLeave}>

        <li onMouseEnter={handleMouseEnter}><Link
          href="https://www.google.com/"
          className={styles.link}
        >
          Inicio
        </Link>
        </li>

        <li onMouseEnter={handleMouseEnter}>
          <Link
            href="https://www.google.com/"
            className={styles.link}
          >
            Otras Ediciones
          </Link>
        </li>

        <li onMouseEnter={handleMouseEnter}>
          <Link
            href="https://www.google.com/"
            className={styles.link}
          >
            Sobre Nosotros
          </Link>
        </li>

        <li onMouseEnter={handleMouseEnter}>
          <Link
            href="https://www.google.com/"
            className={styles.link}
          >
            Contacto
          </Link>
        </li>
      </ul>
      <div 
        className={styles.slider} 
        style={sliderStyle} 
      />
    </nav>
  );
}
