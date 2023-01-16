import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Visibility,
  VisibilityOff,
} from "@mui/material";

/**
 * @mui TextField API
 * @ref https://mui.com/api/text-field/
 */
function BasePassword({
  id = "password",
  label = "",
  error = false,
  helperText = "",
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      id={id}
      label={label}
      defaultValue=""
      error={error}
      helperText={error ? helperText : " "}
      sx={{ m: 2, minWidth: "15em" }}
      InputLabelProps={{ shrink: true }}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
}
export default BasePassword;
