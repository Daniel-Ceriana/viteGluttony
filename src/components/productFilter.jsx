import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterPage,
  setFilterSettings,
} from "../redux/actions/filterSettingsActions.js";
import styles from "./productFilter.module.css";
function ProductFilter() {
  const settings = useSelector((store) => store.filterSettings.settings);
  const totalPages = useSelector((store) => store.filterSettings.totalPages);
  const storePage = useSelector((store) => store.filterSettings.page);

  const dispatch = useDispatch();
  const inputAllRef = useRef(null);
  const inputQuesosRef = useRef(null);
  const inputFiambresRef = useRef(null);
  const inputTextRef = useRef(null);
  const handleChange = () => {
    let aux;

    if (inputAllRef.current.checked) {
      aux = "all";
    }
    if (inputQuesosRef.current.checked) {
      aux = "quesos";
    }
    if (inputFiambresRef.current.checked) {
      aux = "fiambres";
    }

    dispatch(
      setFilterSettings({
        radio: aux,
        text: inputTextRef.current.value,
      })
    );
    dispatch(setFilterPage(1));
  };
  // al cambiar el value de los estados con los handle, se actualiza
  // el componente y despues se manda a redux el cambio

  // const handleConfirm = () => {
  //   handleChange(0,1);
  // };
  const handlePageChange = (next = 0) => {
    let currentPage = storePage;
    let pages = totalPages;

    if (next > 0 && currentPage < pages) {
      // console.log("aumenta de pagina");
      currentPage++;
    } else if (next < 0 && currentPage > 1) {
      // console.log("disminuye de pagina");
      currentPage--;
    } else {
      currentPage = 1;
    }
    dispatch(setFilterPage(currentPage));
  };
  const handleNextPage = () => {
    handlePageChange(1);
  };
  const handlePreviousPage = () => {
    handlePageChange(-1);
  };
  return (
    <div className={styles.filtro}>
      {" "}
      <div>
        <label>
          <input
            type="radio"
            name="category"
            value="all"
            defaultChecked={settings.radio !== "all" ? false : true}
            ref={inputAllRef}
            // onChange={handleChange}
          />
          All{" "}
        </label>{" "}
      </div>{" "}
      <div>
        <label>
          <input
            type="radio"
            name="category"
            value="quesos"
            defaultChecked={settings.radio === "quesos"}
            ref={inputQuesosRef}
          />
          Quesos{" "}
        </label>{" "}
      </div>{" "}
      <div>
        <label>
          <input
            type="radio"
            name="category"
            value="fiambres"
            defaultChecked={settings.radio === "fiambres"}
            ref={inputFiambresRef}
          />
          Fiambres{" "}
        </label>{" "}
      </div>{" "}
      <input
        type="text"
        placeholder="Buscar..."
        defaultValue={settings.text}
        ref={inputTextRef}
      />{" "}
      <br />
      <button className={styles.btn} onClick={handleChange}>
        {" "}
        Confirmar{" "}
      </button>{" "}
      <div className="pagination">
        <button
          className={styles.btn}
          onClick={handlePreviousPage}
          disabled={storePage === 1}
        >
          Previous{" "}
        </button>{" "}
        <span> Page {storePage} </span>{" "}
        <button
          className={styles.btn}
          onClick={handleNextPage}
          disabled={storePage === totalPages}
        >
          Next{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}

export default ProductFilter;
