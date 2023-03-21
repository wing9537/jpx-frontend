import { Box } from "@mui/system";
import { useDispatch } from "react-redux";

import Nav from "./Nav";
import Footer from "./Footer";
import LoginDialog from "../dialog/LoginDialog";
import SignUpDialog from "../dialog/SignUpDialog";
import { getProfile } from "../../redux/userThunk";
import { refreshUser } from "../../redux/userSlice";

function Layout({ children }) {
  const token = window.cookies.get("token");
  const dispatch = useDispatch();

  // reload user if token exists
  if (token) {
    dispatch(getProfile()).then(({ payload }) => {
      if (payload) dispatch(refreshUser({ ...payload, token: token }));
    });
  }

  return (
    <Box>
      <Nav />
      <main>{children}</main>
      <Footer />
      <LoginDialog />
      <SignUpDialog />
    </Box>
  );
}

export default Layout;
