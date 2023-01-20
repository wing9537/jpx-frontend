import * as React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";

// self component
import { closeDialog, getDialogStateByName } from "../../redux/dialogSlice";
import BaseInput from "../inputs/baseInput";
import BaseForm from "../inputs/baseForm";

function SignUpDialog() {
  const open = useSelector(getDialogStateByName("signup"));
  const dispatch = useDispatch();

  const handleClose = () => {
    return dispatch(closeDialog("signup"));
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
    <Dialog onClose={handleClose} open={open} maxWidth="xs">
      <DialogTitle sx={{ fontSize: 25, fontWeight: "bold", mb: -1 }}>Sign Up</DialogTitle>
      <DialogContent>
        <BaseForm mx={0} modelObj={modelObj}>
          <BaseInput
            name="firstname"
            type="text"
            label={t("firstname")}
            limit={limit.firstname}
            sx={{ mx: 0 }}
            fullWidth
          />
          <BaseInput
            name="lastname"
            type="text"
            label={t("lastname")}
            limit={limit.lastname}
            sx={{ mx: 0 }}
            fullWidth
          />
          <BaseInput name="email" type="text" label={t("email")} limit={limit.email} sx={{ mx: 0 }} fullWidth />
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
      </DialogContent>
    </Dialog>
  );
}
export default SignUpDialog;
