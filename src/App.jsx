import "./styles/App.css";

// import Footer from "./components/navBar/footer";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing";
import UnderConstruction from "./components/under-construction";
// import NavBarHeader from "./components/navBar/navBarHeader";
import ItemDetail from "./components/ItemDetail";
// import ItemsFetch from "./components/itemsFetch";
import ProductList from "./components/productList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CombosList from "./components/comboList";
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer";
import SignIn from "./components/forms/SignIn/SignIn";
import SignUp from "./components/forms/SignUp/SignUp";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { verifyToken } from "./redux/actions/userActions";
import Welcome from "./components/Welcome/Welcome";
import User from "./components/User/User";
import { useLocation } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Cart from "./components/Cart";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      dispatch(verifyToken(userToken));
    } else {
      console.log("no hay token");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      {" "}
      <Nav />
      <Routes>
        {" "}
        <Route path="*" element={<Landing />} />{" "}
        {/* <Route path="/quesos" element={<Item />} />{" "} */}
        <Route path="/products" element={<ProductList />} />{" "}
        <Route path="/embutidos" element={<UnderConstruction />} />{" "}
        {/* {user.user && user.user.role === "admin" && ( */}{" "}
        <Route path="/admin" element={<Admin />} /> {/* )}{" "} */}{" "}
        {/* {user.user && user.user.role === "user" && ( */}
          <Route path="/user" element={<User />} />
        <Route path="/combos" element={<CombosList />} />{" "}
        <Route path="/cart" element={<Cart />} />{" "}
        {!user.user && <Route path="/signin" element={<SignIn />} />}{" "}
        {!user.user && <Route path="/signup" element={<SignUp />} />}{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/itemDetail/:id" element={<ItemDetail />} />{" "}
      </Routes>{" "}
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;



