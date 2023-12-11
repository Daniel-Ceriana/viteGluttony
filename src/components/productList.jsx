import React, { useState, useEffect } from "react";
import ProductFilter from "./productFilter";
import ProductContainer from "./productContainer";
import { toast } from "react-toastify";
import { setFilterSettings } from "../redux/actions/filterSettingsActions";
import { useDispatch, useSelector } from "react-redux";
import { setFilterTotalPages } from "../redux/actions/filterSettingsActions";
import styles from "./productFilter.module.css";
import { getProducts } from "../service/productService";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const settings = useSelector((store) => store.filterSettings.settings);

  const storePage = useSelector((store) => store.filterSettings.page);

  const dispatch = useDispatch();


  useEffect(() => {
   
      getProducts(settings, storePage).then((data) => {
        if (!data.message && data.page.products.length > 0) {
          setProducts(data.page.products);
          dispatch(setFilterTotalPages(data.page.totalPages));
          setIsLoading(false);
        } else {
          
          dispatch(
            setFilterSettings({
              //agregar pagina actual para que no salte?
              radio: settings.radio,
              text: "",
            })
          );
          
          //sino se encuentra el producto te manda al lobby ?? deberia quedar donde estaba buscando?
          
          toast.error(data.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
    
    
  }, [settings, storePage]);

  return (
    <div className={styles.cont}>
      {" "}
      <h1 className={styles.product}> PRODUCTS </h1>{" "}
      <div className={styles.contFil}>
        {" "}
        <ProductFilter />{" "}
      </div>{" "}
      {isLoading ? (
        <p> Loading... </p>
      ) : (
        <div>
          <ProductContainer products={products} />{" "}
        </div>
      )}{" "}
    </div>
  );
}

export default ProductList;
