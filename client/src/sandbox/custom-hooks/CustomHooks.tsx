import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../../layout/components/NavItem";
import { useTheme } from "../../providers/ThemeProvider";

const CustomHooks = () => {
  const { isDark } = useTheme();
  const color = isDark ? "white" : "black";

  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="custom counter" to="counter" color={color} />
          <NavItem label="custom user" to="user" color={color} />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default CustomHooks;
