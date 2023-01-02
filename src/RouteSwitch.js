import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import App from "./App";
import Manga from "./components/Manga";

const RouteSwitch = () => {
  const [mangaList, setMangaList] = useState([{}]);

  const [isSidebarShow, setIsSidebarShow] = useState(false);

  const handleSidebar = () => {
    setIsSidebarShow(!isSidebarShow);
  };

  return (
    <BrowserRouter basename="/">
      <Nav handleSidebar={handleSidebar} />
      <Sidebar isSidebarShow={isSidebarShow} handleSidebar={handleSidebar} />
      <Footer isSidebarShow={isSidebarShow} handleSidebar={handleSidebar} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/manga" element={<Manga emojiList={mangaList} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
