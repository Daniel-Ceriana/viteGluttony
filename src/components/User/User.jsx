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
import styles from "./User.module.css";
import { useState } from "react";
import FormUser from "./FormUser";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
      fullName: "",
      dni: "",
      email: "",
      role: "",
      country: "",
      city: "",
      cellphone: "",
      postalCode: "",
      street:"",
  });
  const user = useSelector((store) => store.user);

  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const getUserData=()=>{
    setFormData({
      fullName: user.user.fullName,
      dni: user.user.dni,
      email: user.user.email,

      role: user.user.role,
      country: user.user.country,
      city: user.user.city,
      cellphone: user.user.cellphone,
      postalCode: user.user.postalCode,
      street:user.user.street
    })
  }

useEffect(()=>{
  if(user.user){
    getUserData();
  }
  // eslint-disable-next-line
},[user])

  return (
    <Box sx={{ display: "flex" }}>
      

   
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
        <Typography paragraph>
          <div className={styles.contForm}>
            
            <div className={styles.datos}>
              <ul className={styles.item}>
                <h2>User data</h2>
                <li>Full Name: {formData.fullName} </li>
                <li>Dni: {formData.dni}</li>
                <li>E-mail: {formData.email}</li>
                <li>Role: {formData.role}</li>
                <li>Country: {formData.country}</li>
                <li>City: {formData.city}</li>
                <li>Phone: {formData.cellphone}</li>
                <li>Postal Code: {formData.postalCode}</li>
              </ul>
              <img
                width={300}
                src="https://i.ibb.co/Zx0PtgV/user.png"
                className={styles.foto}
              ></img>
            </div>
            <FormUser />
          </div>
        </Typography>
      </Box>
    </Box>
  );
}


