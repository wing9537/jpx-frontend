import Sidebar from "../components/layout/Sidebar";
import { AppBar, Drawer, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Setting() {
  const theme = useTheme();
  return <Sidebar sx={{ zIndex: theme.zIndex.appBar + 10 }} />;
}

export default Setting;
