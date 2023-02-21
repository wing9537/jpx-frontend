import Footer from "./Footer";
import Nav from "./Nav";
import { Box } from "@mui/system";

function Layout({ children }) {
  return (
    <Box>
      <Nav />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}

export default Layout;
