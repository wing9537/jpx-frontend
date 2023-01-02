import { Box, Checkbox, FormGroup, FormControlLabel, FormControl, InputLabel, FormHelperText } from "@mui/material";

/**
 * @mui Checkbox API
 * @ref https://mui.com/material-ui/api/checkbox/
 */
function BaseCheckbox({ id = "checkbox", label = "", value = [], error = false, helperText = "", options = {}, inputProps = {}, disabled = false, ...rest }) {
  const handleChange = (e, item) => {
    const index = value.indexOf(item);
    if (index > -1) {
      value.splice(index, 1);
    } else {
      value.push(item);
    }
    if (inputProps.onChange) {
      inputProps.onChange(e, value);
    }
  };

  return (
    <Box m={2} display="inline-flex">
      <FormControl error={error}>
        <Box px={2} py={1} sx={{ width: "15em" }} className={`outlined-input ${disabled ? "disabled" : error ? "error" : ""}`}>
          <InputLabel id={`lbl-${id}`} shrink>
            {label}
          </InputLabel>
          <FormGroup id={id} {...rest}>
            {Object.entries(options).map(([key, val]) => (
              <FormControlLabel
                key={key}
                value={key}
                label={val}
                disabled={disabled}
                inputRef={inputProps.ref}
                control={<Checkbox name={inputProps.name} onChange={handleChange} />}
              />
            ))}
          </FormGroup>
        </Box>
        <FormHelperText>{error && helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
}
export default BaseCheckbox;
