import React from "react";
import "./itemDetail.css";
// import img from "../assets/img/foto3.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CombosList from "../../Combo/comboList";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../redux/actions/cartActions";
import { updateCart } from "../../../service/productService";
const ItemDetail = () => {
  const routeParams = useParams();
  // console.log(routeParams.id);
  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const location = useLocation();
  // const {producto} = location.state;
  // console.log(producto);
  const handleOnClickAdd = (product) => {
    dispatch(addProduct(product));
  };

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // let data;
  useEffect(() => {
    // Realiza una solicitud Fetch a la API
    fetch("http://localhost:4000/api/products/" + routeParams.id)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(data); // Almacena los datos en el estado
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setIsLoading(false);
      });

    if (user.user != undefined) {
      updateCart({ user, cart });
    }
    // eslint-disable-next-line
  }, [cart]);

  return (
    <>
      {" "}
      {isLoading ? (
        <p> Loading... </p>
      ) : (
        <div>
          <div className="cont" style={{ fontFamily: "Abel, sans-serif" }}>
            <div className="box1">
              {" "}
              <img className="img" src={data.product.imgUrl} alt="" />{" "}
            </div>{" "}
            <div className="info">
              {" "}
              <h2> {data.product.name} </h2>{" "}
              <strong> $ {data.product.price} </strong>{" "}
              <button
                className="css-button-rounded--green"
                onClick={() => handleOnClickAdd(data.product)}>
                {" "}
                Agregar{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
          <CombosList productId={routeParams.id} />{" "}
        </div>
      )}{" "}
    </>
  );
};
export default ItemDetail;
