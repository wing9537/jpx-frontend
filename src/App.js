import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box>Latest update</Box>
        <Box>New release</Box>
        <Box>Hot managas</Box>
        <Box>Being watched</Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
