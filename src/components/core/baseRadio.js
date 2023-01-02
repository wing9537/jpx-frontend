import { Box, Radio, RadioGroup, FormControlLabel, FormControl, InputLabel, FormHelperText } from "@mui/material";

/**
 * @mui RadioGroup API
 * @ref https://mui.com/material-ui/api/radio-group/
 */
function BaseRadio({ id = "radio", label = "", error = false, helperText = "", options = {}, inputProps = {}, disabled = false, ...rest }) {
  return (
    <Box m={2} display="inline-flex">
      <FormControl error={error}>
        <Box px={2} py={1} sx={{ width: "15em" }} className={`outlined-input ${disabled ? "disabled" : error ? "error" : ""}`}>
          <InputLabel id={`lbl-${id}`} shrink>
            {label}
          </InputLabel>
          <RadioGroup id={id} defaultValue="" {...inputProps} {...rest}>
            {Object.entries(options).map(([key, val]) => (
              <FormControlLabel key={key} value={key} label={val} disabled={disabled} inputRef={inputProps.ref} control={<Radio />} />
            ))}
          </RadioGroup>
        </Box>
        <FormHelperText>{error && helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
}
export default BaseRadio;
