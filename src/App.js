import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// components
import Manga from "./features/manga/Manga";
import Example from "./features/Example";
import Setting from "./features/setting/Setting";
import Layout from "./components/layout/Layout";
import AuthKit from "./components/layout/AuthKit";

function App() {
  const theme = createTheme({
    palette: {
      secondary: { main: "#64748B" },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <BrowserRouter basename="/">
            <Layout>
              <Routes>
                <Route path="/home" element={<Manga />} />
                <Route path="/example" element={<Example />} />
                <Route path="/" element={<AuthKit />}>
                  <Route path="/setting" element={<Setting />} />
                </Route>
              </Routes>
            </Layout>
          </BrowserRouter>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
