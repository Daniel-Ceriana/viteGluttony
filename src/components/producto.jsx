import React, { useEffect } from "react";
import "../styles/product.css";
import { addProduct, deleteProduct } from "../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import { updateCart } from "../service/productService";
import styles from "./Producto.module.css";

function Producto(props) {
  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleOnClickAdd = (product) => {
    dispatch(addProduct(product));
    // console.log(user.user.cart);
    if (user.user) {
      updateCart({ user, cart });
    }
  };
  const handleOnClickDelete = (product) => {
    dispatch(deleteProduct(product));
    if (user.user) {
      updateCart({ user, cart });
    }
  };
  useEffect(() => {
    if (user.user !== undefined) {
      updateCart({ user, cart });
    }
  }, [cart]);

  return (
    <div className={styles.proCard}>
      <LinkRouter
        to={String("/itemDetail/" + props.producto._id)}
        className="LinkRouter">
        <img
          src={props.producto.imgUrl}
          alt={props.producto.name}
          className="producto-imagen"
        />
        <div>
          <h3 className={styles.fondoTitulo}> {props.producto.name} </h3>{" "}
          <p> Precio: {props.producto.price} </p>{" "}
          <p> ID: {props.producto._id} </p>{" "}
        </div>{" "}
      </LinkRouter>{" "}
      <div className="buttonDiv">
        <button
          className={styles.agregar}
          onClick={() => handleOnClickAdd(props.producto)}>
          {" "}
          AGREGAR{" "}
        </button>{" "}
        <button
          className={styles.quitar}
          onClick={() => handleOnClickDelete(props.producto)}>
          {" "}
          QUITAR{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}

export default Producto;
