import { TextField } from "@mui/material";

/**
 * @mui TextField API
 * @ref https://mui.com/api/text-field/
 */
function BaseTextField({ id = "text", label = "", error = false, helperText = "", ...rest }) {
  return (
    <TextField
      id={id}
      label={label}
      defaultValue=""
      error={error}
      helperText={error ? helperText : " "}
      sx={{ m: 2, minWidth: "15em" }}
      InputLabelProps={{ shrink: true }}
      {...rest}
    />
  );
}
export default BaseTextField;
