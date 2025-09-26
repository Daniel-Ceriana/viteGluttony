import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./User.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { signIn, signOut } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

export default function FormUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    dni: "",
    email: "",
    // password: "",
    country: "",
    city: "",
    cellphone: "",
    postalCode: "",
    street: "",
    from: "",
  });
  const user = useSelector((store) => store.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    // AVISAR DE DESLOGUEO
    console.log("USER SE DESLOGUEA");
    try {
      const res = await axios.put(
        `https://gluttony-backend.vercel.app/api/auth/` + formData.id,
        formData
        // { headers: { Authorization: "Bearer " + userToken } }
      );
      dispatch(signOut());
      navigate("/signIn");
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getUserData = () => {
    setFormData({
      id: user.user.id,
      fullName: user.user.fullName,
      dni: user.user.dni,
      email: user.user.email,
      // password: "",
      // role: user.user.role,
      country: user.user.country,
      city: user.user.city,
      cellphone: user.user.cellphone,
      postalCode: user.user.postalCode,
      street: user.user.street,
      from: user.user.from,
    });
  };
  useEffect(() => {
    if (user.user) {
      getUserData();
    }
    // eslint-disable-next-line
  }, [user]);
  return (
    <React.Fragment>
      <Button
        className={styles.editar}
        variant="outlined"
        onClick={handleClickOpen}>
        Update data{" "}
      </Button>{" "}
      <Dialog open={open} onClose={handleClose}>
        <DialogActions>
          <Button onClick={handleClose}> Cancel </Button>{" "}
        </DialogActions>{" "}
        <DialogContent>
          <DialogContentText>
            <form className={styles.form}>
              <label htmlFor="fullName"> Full Name: </label>{" "}
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <label htmlFor="dni"> DNI: </label>{" "}
              <input
                type="text"
                id="dni"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                required
              />
              <label htmlFor="email"> E - mail: </label>{" "}
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />{" "}
              <label htmlFor="country"> Country: </label>{" "}
              <input
                type="text"
                id="country"
                name="country"
                defaultValue={formData.country}
                onChange={handleChange}
                required
              />
              <label htmlFor="city"> City: </label>{" "}
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <label htmlFor="cellphone"> Phone: </label>{" "}
              <input
                type="tel"
                id="cellphone"
                name="cellphone"
                value={formData.cellphone}
                onChange={handleChange}
                required
              />
              <label htmlFor="postalCode"> Postal Code: </label>{" "}
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
              <button
                className={styles.btn}
                type="button"
                onClick={handleSubmit}>
                Update user{" "}
              </button>{" "}
            </form>{" "}
          </DialogContentText>{" "}
        </DialogContent>{" "}
      </Dialog>{" "}
    </React.Fragment>
  );
}
