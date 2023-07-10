import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { Navigate, Outlet } from "react-router-dom";
import NavItem from "../layout/components/NavItem";
import { useUser } from "../users/providers/UserProvider";
import ROUTES from "../routes/routesModel";
import { useTheme } from "../providers/ThemeProvider";

const Sandbox = () => {
  const { user } = useUser();
  const { isDark } = useTheme();
  const color = isDark ? "white" : "black";
  if (!user || !user.isAdmin) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="babel" to="babel" color={color} />
          <NavItem label="styles" to="comp-style" color={color} />
          <NavItem
            label="string interpolation"
            to="string-interpolation"
            color={color}
          />
          <NavItem label="lifecycle hooks" to="lifecycle" color={color} />
          <NavItem label="custom hooks" to="custom" color={color} />
          <NavItem label="memoization" to="memoization" color={color} />
          <NavItem label="context" to="context" color={color} />
          <NavItem label="forms" to="forms" color={color} />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Sandbox;
