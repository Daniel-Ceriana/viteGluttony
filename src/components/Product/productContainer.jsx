import React from "react";
import Producto from "./producto"; // Asegúrate de importar el componente Producto

function ProductContainer(props) {
  const { products } = props;
  // console.log(productos);
  return (
    <div className="product-container">
      {" "}
      {products.map((producto) => (
        <section key={producto._id}>
          <Producto producto={producto} />{" "}
        </section>
      ))}{" "}
    </div>
  );
}

export default ProductContainer;
