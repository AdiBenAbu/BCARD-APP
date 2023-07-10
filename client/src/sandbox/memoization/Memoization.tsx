import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "./../../layout/components/NavItem";
import { useTheme } from "../../providers/ThemeProvider";

const Memoization = () => {
  const { isDark } = useTheme();
  const color = isDark ? "white" : "black";

  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="usecallback" to="use-callback" color={color} />
          <NavItem label="use memo" to="use-memo" color={color} />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Memoization;
