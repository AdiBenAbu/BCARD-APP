import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Outlet } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import NavItem from "../../layout/components/NavItem";
import DrawerListItem from "../DrawerListItem";
import { useTheme } from "../../providers/ThemeProvider";

const LifeCycleHooks = () => {
  const [isOpen, setOpen] = useState(false);
  const { isDark } = useTheme();
  const color = isDark ? "white" : "black";

  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
          <ExpandMoreIcon />
        </IconButton>

        <Drawer anchor="top" open={isOpen} onClose={() => setOpen(false)}>
          <List>
            <DrawerListItem
              label="Initial"
              navigateTo="initial"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="useState"
              navigateTo="use-state-cycle"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="useEffectDidMount"
              navigateTo="componentDidMount"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="useEffectDidUpdate"
              navigateTo="componentDidUpdate"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="useEffectWillUnmount"
              navigateTo="componentWillUnmount"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="useEffectNoDependencies"
              navigateTo="no-dependencies"
              onClose={() => setOpen(false)}
              divider={false}
            />
          </List>
        </Drawer>

        <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
          <NavItem label="Initial" to="initial" color={color} />
          <NavItem label="useState" to="use-state-cycle" color={color} />
          <NavItem
            label="useEffectDidMount"
            to="componentDidMount"
            color={color}
          />
          <NavItem
            label="useEffectDidUpdate"
            to="componentDidUpdate"
            color={color}
          />
          <NavItem
            label="useEffectWillUnmount"
            to="componentWillUnmount"
            color={color}
          />
          <NavItem
            label="useEffectNoDependencies"
            to="no-dependencies"
            color={color}
          />
        </Box>
      </AppBar>

      <Outlet />
    </div>
  );
};

export default LifeCycleHooks;
