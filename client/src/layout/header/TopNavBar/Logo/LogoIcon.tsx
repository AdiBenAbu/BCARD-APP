import React from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../../routes/routesModel";

const LogoIcon = () => {
  const navigate = useNavigate();
  return (
    <IconButton
      sx={{ display: { xs: "inline-flex", md: "none" } }}
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={() => navigate(ROUTES.ROOT)}
    >
      <Avatar
        sx={{ backgroundColor: "black" }}
        alt="Escape Room icon"
        src="/assets/images/CubeLogo.png"
      />
    </IconButton>
  );
};

export default LogoIcon;
