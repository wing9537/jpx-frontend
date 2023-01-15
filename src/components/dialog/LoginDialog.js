import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useTranslation } from "react-i18next";


import { Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// self component
import { closeDialog, getDialogStateByName } from "../../redux/dialogSlice";
import BaseInput from "../inputs/baseInput";
import BaseTextField from "../inputs/baseTextField";
import BaseForm from "../inputs/baseForm";

function LoginDialog() {
  const open = useSelector(getDialogStateByName("login"));
  const dispatch = useDispatch();

  const handleClose = () => {
    return dispatch(closeDialog("login"));
  };

  const handleListItemClick = (value) => {
    console.log(value);
  };

  const modelObj = {
    sampleText: "",
    customValid: "",
    sampleSelect: "",
    sampleRadio: "",
    sampleCheckbox: [],
    sampleDatePicker: "",
  };

  const limit = {
    sampleText: { min: 10, max: -1 },
    customValid: { min: 1, max: -1 },
    sampleSelect: { min: 1, max: -1 },
    sampleRadio: { min: 1, max: -1 },
    sampleCheckbox: { min: 1, max: 1 },
    sampleDatePicker: { min: 1, max: -1 },
  };

  const { t } = useTranslation("example");
  const sampleData = t("sampleData", { returnObjects: true });

  return (
    <Dialog onClose={handleClose} open={open} maxWidth='xs'>
      <DialogTitle sx={{ fontSize: 25, fontWeight: 'bold', mb: -1 }}>Welcome!</DialogTitle>
      <DialogContent>
        <DialogContentText>Sign in to continue.</DialogContentText>
        <TextField
          autoFocus
          margin="normal"
          id="email"
          label="Email Address"
          type="email"
          placeholder="example@email.com"
          fullWidth
          variant="outlined"
          required='true'
        />
        <BaseForm fullWidth>
          <BaseInput
            name="sampleText"
            type="text"
            label={t("sampleText")}
            limit={limit.sampleText}
            fullWidth
          />
        </BaseForm>

        <Button variant="contained" fullWidth sx={{ my: 2 }}>Log in</Button>
        <DialogContentText>Don't have a account? <Link underline="hover" href="/sign-up"> Sign up</Link></DialogContentText>

      </DialogContent>
    </Dialog>
  );
}
export default LoginDialog;
