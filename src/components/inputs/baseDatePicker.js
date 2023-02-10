import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { DATE } from "../../common/constant";

/**
 * @mui DatePicker API
 * @ref https://mui.com/x/api/date-pickers/date-picker/
 */
function BaseDatePicker({
  id = "datepicker",
  label = "",
  error = false,
  helperText = "",
  inputProps = {},
  ...rest
}) {
  const [dateObj, setDateObj] = useState(null);

  const handleChange = (obj, value) => {
    setDateObj(obj);
    if (inputProps.onChange) {
      inputProps.onChange({
        target: {
          name: inputProps.name,
          value: value || obj?.format(DATE.format) || "",
        },
      });
    }
  };

  return (
    <Box m={2} display="inline-flex">
      <DatePicker
        value={dateObj}
        onChange={handleChange}
        mask={DATE.mask}
        inputFormat={DATE.format}
        inputRef={inputProps.ref}
        renderInput={(params) => (
          <TextField
            {...params}
            id={id}
            label={label}
            name={inputProps.name}
            inputProps={{
              ...params.inputProps,
              onBlur: inputProps.onBlur,
            }}
            sx={{ width: "15em" }}
            InputLabelProps={{ shrink: true }}
            error={error}
            helperText={error && helperText}
          />
        )}
        {...rest}
      />
    </Box>
  );
}
export default BaseDatePicker;
