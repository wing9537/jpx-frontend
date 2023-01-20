import * as React from "react";
import { Grid, Dialog, DialogTitle, DialogContent, DialogContentText, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";

// self component
import { openDialog, closeDialog, getDialogStateByName } from "../../redux/dialogSlice";
import BaseInput from "../inputs/baseInput";
import BaseForm from "../inputs/baseForm";

function SignUpDialog() {
  const open = useSelector(getDialogStateByName("signup"));
  const dispatch = useDispatch();

  const handleClose = () => {
    return dispatch(closeDialog("signup"));
  };

  const openLogin = () => {
    dispatch(closeDialog("signup"));
    dispatch(openDialog("login"));
  };

  const modelObj = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
  };

  const limit = {
    firstname: { min: 2, max: -1 },
    lastname: { min: 2, max: -1 },
    username: { min: 7, max: -1 },
    password: { min: 7, max: -1 },
    email: { min: 7, max: -1 },
  };

  const { t } = useTranslation("example");

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="sm">
      <DialogTitle sx={{ fontSize: 25, fontWeight: "bold", mb: -1 }}>Sign Up</DialogTitle>
      <DialogContent>
        <BaseForm mx={0} modelObj={modelObj}>
          <Grid container spacing={2}>
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
              <BaseInput name="email" type="text" label={t("email")} limit={limit.email} sx={{ mx: 0 }} fullWidth />
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
          </Grid>
        </BaseForm>
        <DialogContentText>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link underline="hover" onClick={openLogin}>
                Already have a account? Sign in
              </Link>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
export default SignUpDialog;
