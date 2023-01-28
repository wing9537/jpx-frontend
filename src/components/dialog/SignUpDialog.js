import * as React from "react";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Link,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

// self component
import {
  openDialog,
  closeDialog,
  getDialogStateByName,
} from "../../redux/dialogSlice";
import BaseInput from "../inputs/baseInput";
import BaseForm from "../inputs/baseForm";

function SignUpDialog() {
  const open = useSelector(getDialogStateByName("signup"));
  const dispatch = useDispatch();

  const { t } = useTranslation("example");

  const modelObj = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    mobile: "", // TODO: add mobile
  };

  const emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

  const limit = {
    firstname: { min: 2, max: -1 },
    lastname: { min: 2, max: -1 },
    username: { min: 7, max: -1 },
    password: { min: 8, max: 20 },
    email: { min: 7, max: -1 },
  };

  const handleClose = () => {
    return dispatch(closeDialog("signup"));
  };

  const openLogin = () => {
    dispatch(closeDialog("signup"));
    dispatch(openDialog("login"));
  };

  const onConfirm = async (formData) => {
    console.log(formData);
    const response = await fetch("/jpx/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return response.ok;
  };

  const isPasswordMatch = (_, values) =>
    values.password == values.confirmPassword || "Passwords not match";

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="sm">
      <DialogTitle sx={{ fontSize: 25, fontWeight: "bold", mb: -3 }}>
        Sign Up
      </DialogTitle>
      <DialogContent>
        <BaseForm mx={0} modelObj={modelObj} onConfirm={onConfirm}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <BaseInput
                name="firstname"
                type="text"
                label={t("firstname")}
                limit={limit.firstname}
                sx={{ mx: 0 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BaseInput
                name="lastname"
                type="text"
                label={t("lastname")}
                limit={limit.lastname}
                sx={{ mx: 0 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <BaseInput
                name="email"
                type="text"
                pattern={emailRegex}
                label={t("email")}
                limit={limit.email}
                sx={{ mx: 0 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <BaseInput
                name="username"
                type="text"
                label={t("username")}
                limit={limit.username}
                sx={{ mx: 0 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <BaseInput
                name="password"
                type="password"
                label={t("password")}
                limit={limit.password}
                sx={{ mx: 0 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <BaseInput
                name="confirmPassword"
                type="password"
                label={t("confirmPassword")}
                limit={limit.password}
                rules={isPasswordMatch}
                sx={{ mx: 0 }}
                fullWidth
              />
            </Grid>
          </Grid>
        </BaseForm>
        <DialogContentText>
          {/* <Grid container justifyContent="flex-end">
            <Grid item> */}
          <Link underline="hover" onClick={openLogin}>
            Already have a account? Sign in
          </Link>
          {/* </Grid>
          </Grid> */}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
export default SignUpDialog;
