import React, { useEffect } from "react";
import logo from "../../logoSinFondo.png";
import styles from "./Nav.module.css";
import { Link as LinkRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/actions/userActions";

const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const cartCount = useSelector((store) => store.cart.totalItems);
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    // console.log(user);
  }, [user, cartCount]);

  const logCart = () => {
    console.log(cart);
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };
  return (
    <div>
      <nav className={styles.nav}>
        <LinkRouter to="home">
          <img className={styles.logo} src={logo} width={150} alt="logo" />{" "}
        </LinkRouter>{" "}
        <ul className={styles.navItem}>
          <LinkRouter
            to="products "
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: " #e85d04",
            }}>
            <li> PRODUCTS </li>{" "}
          </LinkRouter>{" "}
          <LinkRouter
            to="combos"
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: " #e85d04",
            }}>
            <li> COMBOS </li>{" "}
          </LinkRouter>{" "}
          <LinkRouter
            to="about"
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: " #e85d04",
            }}>
            <li> ABOUT </li>{" "}
          </LinkRouter>{" "}
          <LinkRouter
            to="contact"
            style={{
              paddingLeft: 13,
              textDecoration: "none",
              color: " #e85d04",
            }}>
            <li> CONTACT US </li>{" "}
          </LinkRouter>{" "}
        </ul>{" "}
        <div className={styles.navBtn}>
          {" "}
          {user.user ? (
            user.fullName
          ) : (
            <LinkRouter to="signin">
              <button className={styles.log}> LOG IN </button>{" "}
            </LinkRouter>
          )}{" "}
          {user.user ? (
            <>
              <LinkRouter to="/user">
              <div  className={styles.sign}>
                {" "}
                Hola {user.user.fullName}
                 {" "}
              </div>{" "}
              </LinkRouter>
              <button onClick={handleSignOut} className={styles.sign}>
                {" "}
                SIGN OUT{" "}
              </button>{" "}
            </>
          ) : (
            <LinkRouter to="signup">
              <button className={styles.sign}> SIGN UP </button>{" "}
            </LinkRouter>
          )}{" "}
        </div>{" "}
        <LinkRouter
          to="cart"
          style={{
            paddingLeft: 13,
            textDecoration: "none",
            color: " #e85d04",
          }}>
          <div class="cart">
            <i onClick={logCart} class="material-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24">
                {" "}
                <path d="M0 0h24v24H0z" fill="none" />{" "}
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />{" "}
              </svg>{" "}
            </i>{" "}
            <span class="count"> {cartCount} </span>{" "}
          </div>{" "}
        </LinkRouter>{" "}
      </nav>{" "}
    </div>
  );
};

export default Nav;
