import React from "react";
import styles from "./Contact.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import EmailIcon from "@mui/icons-material/Email";
import timbre from "../../assets/img/timbre.png";
const Contact = () => {
  return (
    <div id="contact" className={styles.cont}>
      <div className={styles.contFoto}>
        <div>
          <h2 className={styles.titulo}> Contactanos </h2>{" "}
        </div>{" "}
        <p className={styles.infoFoto}>
          En Gluttony, valoramos tu conexión y estamos aquí para responder a tus
          preguntas y comentarios.No dudes en ponerte en contacto con nosotros a
          través de los siguientes medios:
        </p>{" "}
        {/* <img
                      className={styles.foto1}
                      src="https://i.ibb.co/2nZxP4r/Default-Create-an-image-of-a-mouse-answering-a-phone-with-chee-0-474c9b42-5208-4f08-b746-825942b855d.png">
                      {" "}
                    </img>{" "} */}{" "}
      </div>{" "}
      <div className={styles.info}>
        <div className={styles.cont2}>
          <div className={styles.item}>
            <AddLocationAltIcon />
            <p> Calle Exquisita, N° 123 Ciudad del Sabor, Argentina </p>{" "}
          </div>{" "}
          <div className={styles.item}>
            <PhoneIcon />
            <p> +54 9 11 2345 6789 </p>{" "}
          </div>{" "}
          <div className={styles.item}>
            <EmailIcon />
            <p> info @gluttony.com </p>{" "}
          </div>{" "}
        </div>{" "}
        <p className={styles.contac}>
          {" "}
          ¡ Contáctanos y haz de cada experiencia en Gluttony algo memorable!
        </p>{" "}
      </div>{" "}
      <div className={styles.contLinea}>
        <div className={styles.linea}> </div>{" "}
        {/* <img width={100} src={timbre}>
                                              {" "}
                                            </img>{" "} */}{" "}
      </div>{" "}
    </div>
  );
};

export default Contact;
