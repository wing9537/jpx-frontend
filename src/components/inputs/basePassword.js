import { TextField } from "@mui/material";
import React from "react";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


/**
 * @mui TextField API
 * @ref https://mui.com/api/text-field/
 */
function BasePassword({ id = "password", label = "", error = false, helperText = "", ...rest }) {

    const [showPassword, setShowPassword] = React.useState(false);

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
            {...rest}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment: <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>,
            }}
        />
    );
}
export default BasePassword;
