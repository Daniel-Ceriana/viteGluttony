import React from "react";
import styles from "./Welcome.module.css";
import foto1 from "../../assets/img/wel.png";
import foto2 from "../../assets/img/fondo4.png";
import timbre from "../../assets/img/timbre.png";

const Welcome = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.info}>
        <h1 className={styles.titulo}>Welcome to Glutonny</h1>
        <p className={styles.parrafo}>
          The gourmet destination that awakens your senses! Immerse yourself in the
          excellence of our carefully selected cheeses and hams.
          Discover intense flavors and irresistible textures. At Gluttony, you
          We invite you to enjoy the best gastronomic experience. Explore
          our tables for events or subscribe to our selections
          monthly. Make every day a celebration of good taste in
          Gluttony!
        </p>
        <div className={styles.contLinea}>
          <div className={styles.linea}></div>
          <img width={100} src={timbre}></img>
        </div>
      </div>

      <img
        className={styles.foto3}
        src="https://i.ibb.co/xGY1dDf/Default-Create-a-banner-for-a-website-called-gluttony-the-imag-0-63efa08a-3861-40f3-b6c8-4127268297c.png"
      ></img>
    </div>
  );
};

export default Welcome;
