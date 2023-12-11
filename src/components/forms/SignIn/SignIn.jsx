import { useDispatch, useSelector } from "react-redux";

import * as yup from "yup";
import React from "react";
import quesos from "../../../assets/img/quesos2.jpg";
import { useFormik } from "formik";
import style from "./SignIn.module.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { signIn } from "../../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { addCart } from "../../../redux/actions/cartActions";
import { updateCart } from "../../../service/productService";
import { useEffect } from "react";
export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.user);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      email: yup.string().email().required("Ingrese un email valido"),
      password: yup.string().required(),
    }),

    onSubmit: (formData) => {
      handleSubmit(formData);
    },
  });

  async function handleSubmit(data) {
    const userData = {
      email: data.email,
      password: data.password,
      from: "signUp-form",
    };
    const aux = cart.products.map((aProd) => {
      return { ...aProd };
    });
    dispatch(signIn({ userData, aux })).then((res) => {
      if (res.payload.user.cart.length != 0) {
        dispatch(addCart(res.payload.user.cart));
      }
    });
    // navigate('/home')
  }
  const googleSubmit = async (e) => {
    const token = e.credential;
    const decoded = await jwtDecode(token);
    const userData = {
      email: decoded.email,
      password: decoded.family_name + "keySignUpGoogle1",

      from: "google",
    };

    const aux = cart.products.map((aProd) => {
      return { ...aProd };
    });
    dispatch(signIn({ userData, aux })).then((res) => {
      if (res.payload.user.cart.length != 0) {
        dispatch(addCart(res.payload.user.cart));
      }
    });

    navigate("/home");
  };
  useEffect(() => {
    if (user.user != undefined) {
      updateCart({ user, cart });
    }
  }, [cart]);
  return (
    <>
      <div className={style.fondoLogin}>
        <div className={style.contLogin}>
          <div>
            <img
              className={style.logo}
              src={quesos}
              width={200}
              alt="logo"></img>
          </div>

          <div>
            <h2 className={style.titulo}>INICIA SESIÓN</h2>
            <form onSubmit={formik.handleSubmit} className={style.form}>
              <label htmlFor="email">Correo electrónico:</label>
              <br />
              <input
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email && true}
                onBlur={formik.handleBlur}
              />

              {formik.errors.email && formik.touched.email && (
                <div className={style.errorMessage}>{formik.errors.email}</div>
              )}

              <label htmlFor="password">Contraseña:</label>
              <br />
              <input
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.errors.password && formik.touched.password && (
                <div className={style.errorMessage}>
                  {formik.errors.password}
                </div>
              )}
              <br />
              <br />
              <input
                className={style.formBtn}
                type="submit"
                value="Iniciar sesión"
              />
            </form>
            {/* <button>¿No tienes cuenta?</button> */}
            <GoogleLogin
              className={style.google1}
              onSuccess={googleSubmit}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            ;
          </div>
        </div>
      </div>
    </>
  );
}
