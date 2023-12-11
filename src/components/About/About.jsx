import React from "react";
import styles from "./About.module.css";
import logo from "../../logoSinFondo.png";
import timbre from "../../assets/img/timbre.png";

const About = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.info}>
        <h2 className={styles.titulo}>Nosotros</h2>
        <p>
          {" "}
          Adéntrate en la esencia de Gluttony y descubre cómo Luca Di Formaggio,
          maestro quesero originario de la encantadora Parma, Italia, ha dejado
          una huella inolvidable en la escena culinaria argentina. Con una
          visión audaz, Luca trajo consigo los secretos de la tradición quesera
          italiana, desembarcando en Argentina con la misión de revolucionar la
          industria de los quesos. En las tierras argentinas, Luca no solo
          introdujo métodos artesanales y recetas centenarias, sino que también
          colaboró estrechamente con productores locales, fusionando la rica
          tradición italiana con la pasión auténtica de Argentina. Cada queso en
          Gluttony es un testimonio de esta fusión, desde las suaves y cremosas
          texturas hasta los sabores audaces y picantes que se han convertido en
          nuestra firma distintiva.
        </p>
        <p>
          {" "}
          Hoy, el legado de <span>Luca Di Formaggio</span> vive en cada rincón
          de nuestras mesas. En Gluttony, celebramos la dedicación de Luca a la
          calidad y la innovación, invitándote a ser parte de esta experiencia
          gastronómica única. Únete a nosotros y celebra la revolución del buen
          sabor que Luca ha dejado como su legado en Gluttony.
        </p>
      </div>
      <div className={styles.contImg}>
        <img
          className={styles.foto1}
          src="https://i.ibb.co/F5yKy5j/Absolute-Reality-v16-cheese-picture-for-cheese-shop-0.jpg"
        ></img>

        <div className={styles.luca}>
          <h2>LUCA DI FORMAGGIO</h2>
          <img width={50} src={logo}></img>
        </div>

        <div className={styles.contLinea}>
          <div className={styles.linea}></div>
          <img width={100} src={timbre}></img>
        </div>
      </div>
    </div>
  );
};

export default About;
