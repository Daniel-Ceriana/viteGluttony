import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import styles from "./Admin.module.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Token } from "@mui/icons-material";
import { useEffect } from "react";
import { refreshAdmin } from "../../redux/actions/adminActions";

export default function FormAdmin({ type, productID }) {
  const userToken = localStorage.getItem("token");
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    description: "",
    imgUrl: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (!userToken) {
      console.log("token inexistente");
    }
    if (type === "create") {
      try {
        const user = await axios.post(
          `http://localhost:4000/api/products`,
          formData,
          { headers: { Authorization: "Bearer " + userToken } }
        );
        console.log("Formulario enviado:", formData);
        console.log(user);
        dispatch(refreshAdmin(""));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const user = await axios.put(
          `http://localhost:4000/api/products/` + productID,
          formData,
          { headers: { Authorization: "Bearer " + userToken } }
        );
        console.log("Formulario enviado:", formData);
        console.log(user);
        dispatch(refreshAdmin(""));
      } catch (error) {
        console.log(error);
      }
    }

    setFormData({
      name: "",
      brand: "",
      category: "",
      price: "",
      description: "",
      imgUrl: "",
      stock: "",
    });
    handleClose();
  };

  const getFormData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/products/` + productID
      );
      const product = res.data.product;
      setFormData({
        name: product.name,
        brand: product.brand,
        category: product.category,
        price: product.price,
        description: product.description,
        imgUrl: product.imgUrl,
        stock: product.stock,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    if (type === "edit") {
      getFormData();
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        {type + " "}Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={styles.cont2}>{type}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <h2 className={styles.tituloForm}>{type + " "} Product</h2>
            <form className={styles.form}>
              <label htmlFor="nombreCompleto">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="dni">Brand:</label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
              />

              <label htmlFor="category">Category:</label>
              <input
                type="category"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />

              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />

              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />

              <label htmlFor="imgUrl">imgUrl:</label>
              <input
                type="text"
                id="imgUrl"
                name="imgUrl"
                value={formData.imgUrl}
                onChange={handleChange}
                required
              />

              <label htmlFor="stock">Stock:</label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
              />

              <button
                className={styles.btn}
                type="button"
                onClick={handleSubmit}>
                {type + " "} Product
              </button>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
