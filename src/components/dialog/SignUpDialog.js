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
import { newProfile } from "../../redux/userThunk";
import BaseInput from "../inputs/baseInput";
import BaseForm from "../inputs/baseForm";
import { isValidEmail, isValidMobile } from "../../common/utils";

function SignUpDialog() {
  const isOpen = useSelector(getDialogStateByName("signup"));
  const dispatch = useDispatch();

  const { t } = useTranslation("dialog");

  const modelObj = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    mobile: "",
  };

  const limit = {
    firstname: { min: 2, max: -1 },
    lastname: { min: 2, max: -1 },
    username: { min: 7, max: -1 },
    password: { min: 8, max: 20 },
    confirmPassword: { min: 1, max: -1 },
    email: { min: 7, max: -1 },
    mobile: { min: 0, max: 8 },
  };

  const handleClose = () => {
    return dispatch(closeDialog("signup"));
  };

  const openLogin = () => {
    dispatch(closeDialog("signup"));
    dispatch(openDialog("login"));
  };

  const onConfirm = async (formData) => {
    const result = await dispatch(newProfile(formData));
    return result.payload;
  };

  const isPasswordMatch = (_, values) => {
    return (
      values.password == values.confirmPassword || t("validate.pwdNotMatch")
    );
  };

  return (
    <Dialog onClose={handleClose} open={isOpen} maxWidth="sm">
      <DialogTitle sx={{ fontSize: 25, fontWeight: "bold", mb: -3 }}>
        {t("signup.title")}
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
            <Grid item xs={12} sm={6}>
              <BaseInput
                name="email"
                type="text"
                label={t("email")}
                limit={limit.email}
                rules={{ pattern: isValidEmail }}
                sx={{ mx: 0 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BaseInput
                name="mobile"
                type="text"
                label={t("mobile")}
                limit={limit.mobile}
                rules={{ pattern: isValidMobile }}
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
                limit={limit.confirmPassword}
                rules={isPasswordMatch}
                sx={{ mx: 0 }}
                fullWidth
              />
            </Grid>
          </Grid>
        </BaseForm>
        <DialogContentText>
          <Link underline="hover" onClick={openLogin}>
            {t("signup.link")}
          </Link>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
export default SignUpDialog;
