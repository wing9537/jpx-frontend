import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import Manga from "./features/manga/Manga";
import Example from "./features/Example";
import Setting from "./features/Setting";
import Layout from "./components/layout/Layout";
import { getToken } from "./redux/userSlice";

function App() {
  const token = useSelector(getToken);

  const theme = createTheme({
    palette: {
      secondary: { main: "#64748B" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <BrowserRouter basename="/">
          <Layout>
            <Routes>
              <Route path="/manga" element={<Manga />} />
              <Route path="/example" element={<Example />} />
              {token && <Route path="/setting" element={<Setting />} />}
            </Routes>
          </Layout>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
