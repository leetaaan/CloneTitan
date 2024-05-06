import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import {
  styleDrawer,
  sidebarLinks,
  slugName,
  language,
} from "../../../enum/EnumApi";
import { getItemByCategory } from "../../../api/ItemApi";
import logo1 from "../../../assets/logo.png";
import { Typography } from "@mui/material";

const openedMixin = (theme) => ({
  width: styleDrawer.drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: styleDrawer.drawerWidth,
    width: `calc(100% - ${styleDrawer.drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: styleDrawer.drawerWidth,
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

export default function SideBar({name}) {
  const drawerOpenKey = 'drawerOpen';
const defaultOpen = localStorage.getItem(drawerOpenKey) === 'true';
  const [open, setOpen] = useState(defaultOpen);
  const navigate = useNavigate();

  const [logo, setLogo] = useState([]);

  const payload = {
    categorySlug: slugName.logo,
    language: language.english,
  };

  useEffect(() => {
    localStorage.setItem(drawerOpenKey, open);
    getItemByCategory(payload).then((data) => {
      if (data) {
        setLogo(data);
      } else setLogo([]);
    });
  }, [open]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color={styleDrawer.color}
            aria-label={styleDrawer.ariaLabel}
            edge={styleDrawer.edge}
            onClick={() => setOpen(!open)}
            sx={{ marginRight: 5, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{display: "flex",width: "100%",justifyContent: "space-between", alignItems:"center"}}>
            <Typography variant="h5" component="h2">
                {name}
            </Typography>
            {logo.length > 0
              ? logo.map((item, index) => (
                  <img
                    key={index}
                    className="logo"
                    src={item.imageUrl}
                    alt="logo"
                  />
                ))
              : null}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={styleDrawer.styleDrawerHeader}>
          <img width="30" src={logo1} />
          <IconButton onClick={() => setOpen(!open)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sidebarLinks.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={styleDrawer.styleListItem}
              onClick={() => {
                navigate(`${item.path}`);
              }}
            >
              <ListItemButton
                selected={window.location.pathname === item.path ? true : false}
                sx={styleDrawer.styleListItemButton}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
