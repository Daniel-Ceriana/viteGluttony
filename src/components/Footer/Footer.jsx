import React from "react";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link as LinkRouter } from "react-router-dom";
import styles from "./Footer.module.css";
import quesos from "../../assets/img/fondo5.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.contFooter}>
      <footer className={styles.footer}>
        <div>
          <ul className={styles.itemFooter}>
            Customer Support
            <li>08hs a 18hs</li>
            <li>0800-212-3131</li>
            <li>Calle Falsa 123, haedo</li>
          </ul>{" "}
        </div>
        <div>
          <ul className={styles.itemFooter}>
            {" "}
            Category
            <Link style={{ textDecoration: "none", color: "black" }}>
              <li className={styles.link}>Quesos Blandos</li>
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <li className={styles.link}>Quesos Duros</li>
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <li className={styles.link}>Quesos Semiduros</li>
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <li className={styles.link}>Embutidos</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className={styles.itemFooter}>
            Combos
            <Link style={{ textDecoration: "none", color: "black" }}>
              <li className={styles.link}>Combos solo queso</li>
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <li className={styles.link}>Combos solo fiambre</li>
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <li className={styles.link}>Combos Combinados</li>
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <li className={styles.link}>Arma tu Combo</li>
            </Link>
          </ul>
        </div>
      </footer>

      <div className={styles.rs}>
        <h2>Contact us </h2>
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default Footer;
