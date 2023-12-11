import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styles from "./Admin.module.css";
import { useState } from "react";
import FormAdmin from "./FormAdmin";
import axios, { all } from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshAdmin } from "../../redux/actions/adminActions";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  backgroundColor: "#ffc16f",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  backgroundColor: "white",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#ffc16f",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const userToken = localStorage.getItem("token");
  // let allProducts=[];
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch();

  const adminRefresh = useSelector((store) => store.admin);
  console.log(adminRefresh);

  const handleDelete = async (productId) => {
    console.log("delete " + productId);
    if (!userToken) {
      console.log("token inexistente");
    }
    try {
      await axios.delete("http://localhost:4000/api/products/" + productId, {
        headers: { Authorization: "Bearer " + userToken },
      });
      console.log("product deleted");
      dispatch(refreshAdmin(""));
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (productId) => {
    console.log("edit " + productId);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getProducts = () => {
    fetch("http://localhost:4000/api/products?limit=30")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data.page.products);
        // allProducts={...data.page.products}
        console.log(allProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    // if(allProducts.length<1){
    console.log(allProducts);
    getProducts();
    // }
    // eslint-disable-next-line
  }, [adminRefresh]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}></AppBar>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph></Typography>
        <Typography paragraph>
          <div className={styles.contForm}>
            <h2>Mis Productos</h2>
            <FormAdmin type={"create"} />
            <div>
              <table className={styles.tabla}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Url</th>
                    <th>Stock</th>
                  </tr>
                </thead>

                {!allProducts.length > 0 ? (
                  <tbody>
                    <tr>
                      <td>name</td>
                      <td>brand</td>
                      <td>category</td>
                      <td>price</td>
                      <td>Description</td>
                      <td>img</td>
                      <td>stock</td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    {allProducts.map((product) => (
                      <tr key={product._id}>
                        <td>{product.name}</td>
                        <td>{product.brand}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>Description</td>
                        <td>img</td>
                        <td>{product.stock}</td>
                        <FormAdmin type={"edit"} productID={product._id} />

                        {/* <button onClick={ ()=>  handleEdit(product._id)}>Edit</button> */}
                        <button onClick={() => handleDelete(product._id)}>
                          Delete
                        </button>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </Typography>
      </Box>
    </Box>
  );
}
