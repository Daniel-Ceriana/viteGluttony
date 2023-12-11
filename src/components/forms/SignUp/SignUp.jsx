import { useDispatch } from "react-redux";

import React from "react";
import quesos from "../../../assets/img/jamon.jpg";
import * as yup from "yup";
import { useFormik } from "formik";
import style from "./SignUp.module.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { signUp } from "../../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(data) {
    const userData = {
      email: data.email,
      password: data.password,
      fullName: data.name,
      from: "signUp-form",
    };
    // console.log(userData);
    dispatch(signUp(userData));
    navigate("/signin");
  }
  const googleSubmit = async (e) => {
    const token = e.credential;
    const decoded = await jwtDecode(token);
    console.log(decoded.family_name + "keySignUpGoogle1");
    const userData = {
      fullName: decoded.name,
      // dni
      email: decoded.email,
      password: decoded.family_name + "keySignUpGoogle1",

      from: "google",
    };
    //  console.log(userData);
    //     dispatch(userActions.signUpUser(userData))
    dispatch(signUp(userData));
    navigate("/signin");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      dni: "",
      email: "",
      password: "",
      repassword: "",
    },

    validationSchema: yup.object({
      name: yup.string().required(),
      // dni: yup.string().required().max(8, "maximo 8 digitos"),
      email: yup.string().email().required("Ingrese un email valido"),
      password: yup
        .string()
        .min(4)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          "Debe contener una mayúscula, una minúscula y un carácter especial (@$!%*?&)"
        ),
      repassword: yup
        .string()
        .oneOf([yup.ref("password")], "las contraseñas no son iguales"),
    }),

    onSubmit: (formData) => {
      handleSubmit(formData);
    },
  });

  return (
    <>
      <div className={style.fondoLogin}>
        <div className={style.contLogin}>
          <div>
            <img
              className={style.logo}
              src={quesos}
              width={200}
              alt="jamon"></img>
          </div>

          <div>
            <h2 className={style.titulo}>REGISTRATE</h2>
            <form onSubmit={formik.handleSubmit} className={style.form}>
              <label htmlFor="fullname">Nombre Completo:</label>

              <input
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.errors.name && formik.touched.name && (
                <div className={style.errorMessage}>{formik.errors.name}</div>
              )}

              {/* <label htmlFor="email">DNI:</label>

              <input
                name="dni"
                type="text"
                value={formik.values.dni}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              /> */}

              {formik.errors.dni && formik.touched.dni && (
                <div className={style.errorMessage}>{formik.errors.dni}</div>
              )}

              <label htmlFor="email">Correo electrónico:</label>

              <input
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.errors.email && formik.touched.email && (
                <div className={style.errorMessage}>{formik.errors.email}</div>
              )}

              <label htmlFor="password">Contraseña:</label>

              <input
                name="password"
                type="text"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.errors.password && formik.touched.password && (
                <div className={style.errorMessage}>
                  {formik.errors.password}
                </div>
              )}

              <label htmlFor="password"> Confirmar Contraseña:</label>

              <input
                name="repassword"
                type="text"
                value={formik.values.repassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.errors.repassword && formik.touched.repassword && (
                <div className={style.errorMessage}>
                  {formik.errors.repassword}
                </div>
              )}

              <input className={style.formBtn} type="submit" value="Sign Up" />
            </form>
            {/* linkRouter */}
            <button className={style.formBtn}>¿Ya tienes cuenta?</button>
            {/* <button className={style.formBtn}>Accede con google</button> */}
            <GoogleLogin
              className={style.formBtn}
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
