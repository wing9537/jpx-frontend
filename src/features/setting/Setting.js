import * as React from "react";
import { useState } from "react";
import {
  Box,
  Drawer,
  Stack,
  CssBaseline,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import Profile from "./Profile";
import SearchManaga from "./SearchManaga";

const drawerWidth = 240;

export default function Sidebar() {
  const [settingOption, setSettingOption] = useState("profile");

  const handleOptionClick = (option) => {
    setSettingOption(option);
  };

  const { t } = useTranslation("setting");
  const menuItems = t("menu", { returnObjects: true });

  return (
    <Stack direction="row">
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
                    key={page}
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
      {(function () {
        switch (settingOption) {
          case "profile":
            return <Profile />;
          case "searchManga":
            return <SearchManaga />;
          default:
            break;
        }
      })()}
    </Stack>
  );
}
