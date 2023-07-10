import React from "react";
import NavBarLink from "../../../components/NavBarLink";
import { makeFirstLetterCapital } from "./utils/algoMethods";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "../../../../providers/ThemeProvider";

type Props = {
  label: string;
  navigateTo: string;
  onClick: () => void;
  styles?: object;
};

const MenuLink: React.FC<Props> = ({
  label,
  navigateTo,
  onClick,
  styles = {},
}) => {
  const { isDark } = useTheme();
  const color = isDark ? "white" : "black";
  return (
    <NavBarLink to={navigateTo} color="black">
      <MenuItem sx={{ ...styles, color: { color } }} onClick={onClick}>
        {makeFirstLetterCapital(label)}
      </MenuItem>
    </NavBarLink>
  );
};

export default MenuLink;
