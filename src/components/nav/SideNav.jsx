import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import colors from "../../utils/colors";
import { useLocation, useNavigate } from "react-router-dom";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import SearchBar from "../Search";

const drawerWidth = 240;

const menus = [
  {
    primary: "Home",
    path: "/home",
  },
  {
    primary: "Bible",
    path: "/bible",
  },
  {
    primary: "API Documentation",
    path: "/apidocumentation"
  }
];

const SideNav = ({ handleChange, searchInput }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // handle navigation
  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          ml: `${drawerWidth}px`,
          height: "80px",

        }}
      >
        <Toolbar className="appbar">
        <AutoStoriesSharpIcon />
          <Typography
            component={"div"}
            noWrap
            color={"ButtonText"}
            sx={{ display: "flex", position: "absolute", right: 12 }}
          >
            <SearchBar handleChange={handleChange} searchInput={searchInput} />
          </Typography>

          {menus.map((menu) => (
            <Typography
              key={menu.path}
              disablePadding
              onClick={() => {
                handleClick(menu.path);
              }}
              textColor='inherit'
            >
              <ListItemButton
                sx={{
                  ml: 2,
                  mr: 2,
                  color:
                    location.pathname === menu.path
                      ? colors.third
                      : colors.secondary,
                  
                  borderRadius: "5px",
                  ":hover": {
                    color: colors.secondary,
                    
                    borderRadius: "5px",
                  },
                }}
              >
                <ListItemText primary={menu.primary} />
              </ListItemButton>
            </Typography>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SideNav;
