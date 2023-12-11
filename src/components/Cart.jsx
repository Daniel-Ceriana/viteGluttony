import React from "react";
import styles from "./Cart.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../redux/actions/cartActions";
import { updateCart } from "../service/productService";
const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.user);

  const [total, setTotal] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let total=0;
    cart.products.map((prod)=>{
      total=total+prod.price
    })
    setTotal(total)
    if(user.user!=undefined){
      updateCart({ user, cart });
    }
  }, [cart]);
  const handleOnClickDelete = (product) => {
    dispatch(deleteProduct(product));

  };
  return (
    <div className={styles.cont}>
      <div className={styles.contTitulo}>
        <h2
          style={{ fontFamily: "Abel, sans-serif" }}
          className={styles.titulo}
        >
          CART
        </h2>
        <ShoppingCartIcon />
      </div>

      <div>
        <table className={styles.productTable}>
          <thead>
            <tr>
              {/* <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {cart.products.map((productosCart, index) => (
              <tr key={index}>
                <td>
                  <img width={100} src={productosCart.imgUrl}></img>
                </td>
                <td>{productosCart.name}</td>
                <td>${productosCart.price.toFixed(2)}</td>
                <td className={styles.delete}>
                <button
          className="css-button-sliding-to-left--red"
          onClick={() => handleOnClickDelete(productosCart)}>
          {" "}
          Quitar{" "}
        </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.totalSection}>
        <p className={styles.price}>Total: ${total}</p>
        <button className={styles.btn} onClick={() => alert("En Construction")}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
