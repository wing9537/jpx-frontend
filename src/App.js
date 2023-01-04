import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

// components
import Nav from "./components/layout/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/layout/Footer";
import Manga from "./features/manga/Manga";
import Example from "./features/Example";

function App() {
  const theme = createTheme({
    palette: {
      secondary: { main: "#64748B" },
    },
  });

  const [mangaList, setMangaList] = useState([{}]);

  const [isSidebarShow, setIsSidebarShow] = useState(false);

  const handleSidebar = () => setIsSidebarShow(!isSidebarShow);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <BrowserRouter basename="/">
            <Nav handleSidebar={handleSidebar} />
            <Sidebar
              isSidebarShow={isSidebarShow}
              handleSidebar={handleSidebar}
            />
            <Routes>
              <Route path="/manga" element={<Manga emojiList={mangaList} />} />
              <Route path="/example" element={<Example />} />
            </Routes>
            <Footer
              isSidebarShow={isSidebarShow}
              handleSidebar={handleSidebar}
            />
          </BrowserRouter>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
