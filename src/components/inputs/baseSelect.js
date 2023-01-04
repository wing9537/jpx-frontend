import { Box, InputLabel, MenuItem, FormControl, Select, OutlinedInput, FormHelperText } from "@mui/material";

/**
 * @mui Select API
 * @ref https://mui.com/material-ui/api/select/
 */
function BaseSelect({ id = "select", label = "", error = false, helperText = "", options = {}, ...rest }) {
  return (
    <Box m={2} display="inline-flex">
      <FormControl error={error}>
        <InputLabel id={`lbl-${id}`} shrink>
          {label}
        </InputLabel>
        <Select id={id} defaultValue="" input={<OutlinedInput notched label={label} />} sx={{ width: "15em" }} {...rest}>
          {Object.entries(options).map(([key, val]) => (
            <MenuItem key={key} value={key}>
              {val}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{error ? helperText : " "}</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default BaseSelect;
