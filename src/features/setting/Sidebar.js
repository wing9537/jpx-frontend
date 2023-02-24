import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { selectOption } from "../../redux/settingSlice";

const drawerWidth = 240;

export default function Sidebar() {
  const dispatch = useDispatch();

  const handleOptionClick = (option) => {
    dispatch(selectOption(option));
  };

  const { t } = useTranslation("setting");
  const menuItems = t("menu", { returnObjects: true });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {Object.entries(menuItems).map(([page, name]) => {
              return (
                <ListItem
                  key={name}
                  disablePadding
                  onClick={() => handleOptionClick(page)}
                >
                  <ListItemButton>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
