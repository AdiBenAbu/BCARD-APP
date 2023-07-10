import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LeftNavBar from "./left-navigation/LeftNavBar";
import RightNavBar from "./right-navigation/RightNavBar";
import { MenuProvider } from "./menu/MenuProvider";

export const NavBar = () => {
  return (
    <MenuProvider>
      <AppBar position="sticky">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 2,
            pl: 2,
            alignItems: "center",
          }}
        >
          <LeftNavBar />
          <RightNavBar />
        </Box>
      </AppBar>
    </MenuProvider>
  );
};
