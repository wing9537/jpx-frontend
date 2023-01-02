import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Manga from "./pages/Manga";
import Example from "./pages/Example";

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
    <LocalizationProvider dateAdapter={AdapterMoment}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <Nav handleSidebar={handleSidebar} />
        <Sidebar isSidebarShow={isSidebarShow} handleSidebar={handleSidebar} />
        <Footer isSidebarShow={isSidebarShow} handleSidebar={handleSidebar} />

        <Routes>
          <Route path="/manga" element={<Manga emojiList={mangaList} />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
