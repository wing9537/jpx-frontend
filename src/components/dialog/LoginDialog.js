import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// self component
import { closeDialog, getDialogStateByName } from "../../redux/dialogSlice";

const emails = ["username@gmail.com", "user02@gmail.com"];

function LoginDialog() {
  const open = useSelector(getDialogStateByName("login"));
  const dispatch = useDispatch();

  const handleClose = () => {
    return dispatch(closeDialog("login"));
  };

  const handleListItemClick = (value) => {
    console.log(value);
  };

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
        />
        <TextField
          autoFocus
          margin="normal"
          id="password"
          label="Password"
          type="password"
          placeholder="your password"
          fullWidth
          variant="outlined"
        />
        <Button variant="contained" fullWidth sx={{ my: 2 }}>Log in</Button>
        <DialogContentText>Don't have a account? <Link underline="hover" href="/sign-up"> Sign up</Link></DialogContentText>

      </DialogContent>
    </Dialog>
  );
}
export default LoginDialog;
