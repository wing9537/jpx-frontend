import * as React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";

// self component
import { openDialog, closeDialog, getDialogStateByName } from "../../redux/dialogSlice";
import BaseInput from "../inputs/baseInput";
import BaseForm from "../inputs/baseForm";

function LoginDialog() {
  const open = useSelector(getDialogStateByName("login"));
  const dispatch = useDispatch();

  const openSignUp = () => {
    dispatch(openDialog("signup"));
    dispatch(closeDialog("login"));
  };

  const handleClose = () => {
    return dispatch(closeDialog("login"));
  };

  const modelObj = {
    username: "",
    password: "",
  };

  const limit = {
    username: { min: 7, max: -1 },
    password: { min: 7, max: -1 },
  };

  const { t } = useTranslation("example");

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="xs">
      <DialogTitle sx={{ fontSize: 25, fontWeight: "bold", mb: -1 }}>Welcome!</DialogTitle>
      <DialogContent>
        <DialogContentText>Sign in to continue.</DialogContentText>
        <BaseForm mx={0} modelObj={modelObj}>
          <BaseInput
            name="username"
            type="text"
            label={t("username")}
            limit={limit.username}
            sx={{ mx: 0 }}
            fullWidth
          />
          <BaseInput
            name="password"
            type="password"
            label={t("password")}
            limit={limit.password}
            sx={{ mx: 0, mt: 3 }}
            fullWidth
          />
        </BaseForm>
        <DialogContentText>
          Don't have a account?
          <Link underline="hover" onClick={openSignUp}>
            Sign up
          </Link>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
export default LoginDialog;
