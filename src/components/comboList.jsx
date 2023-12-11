import React from "react";
import "../styles/itemDetail.css";
import styles from "./combo.module.css";
// import img from "../assets/img/foto3.png";
// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CombosList = (props) => {
  // console.log(props.productId);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let query;
  if (props.productId) {
    query = `?productId=${props.productId}`;
  } else {
    query = "";
  }
  // let data;
  useEffect(() => {
    // Realiza una solicitud Fetch a la API
    fetch("http://localhost:4000/api/combos/" + query)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // console.log(data);
        setData(data); // Almacena los datos en el estado
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setIsLoading(true);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {" "}
      {isLoading ? (
        <p> Loading... </p>
      ) : (
        <div className={styles.wrapper}>
          <h2 className={styles.titulo}> ELIGE NUESTROS COMBOS </h2>{" "}
          <div
            className={styles.cont}
            style={{ fontFamily: "Abel, sans-serif" }}>
            {" "}
            {data.combos.map((combo) => (
              <section className={styles.product} key={combo._id}>
                {" "}
                {combo.products.map((aProd) => (
                  <div className={styles.productCombo} key={aProd.product._id}>
                    <h1 className={styles.nombre}> {aProd.product.name} </h1>{" "}
                    <img
                      className={styles.imgCombo}
                      src={aProd.product.imgUrl}
                      alt={aProd.product.name}
                    />{" "}
                  </div>
                ))}{" "}
                <div className={styles.info}>
                  <h3 className={styles.precio}> Total: $ {combo.total} </h3>{" "}
                </div>{" "}
              </section>
            ))}{" "}
          </div>{" "}
        </div>
      )}{" "}
    </>
  );
};
export default CombosList;
