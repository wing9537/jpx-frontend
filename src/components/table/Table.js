import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";

export default function DataTable() {
  const { t } = useTranslation("setting");

  const columns = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "mangaName", headerName: t("mangaName"), width: 350 },
    { field: "authorName", headerName: t("authorName"), width: 300 },
    {
      field: "url",
      headerName: "URL",
      width: 300,
    },
  ];

  const rows = [
    {
      id: 1,
      mangaName: "Attack on Titan ",
      authorName: "Hajime Isayama",
      url: 35,
    },
    { id: 2, mangaName: "One Piece", authorName: "Eiichiro Oda", url: 42 },
    { id: 3, mangaName: "Naruto", authorName: "Masashi Kishimoto", url: 45 },
    { id: 4, mangaName: "Dragon Ball", authorName: " Akira Toriyama", url: 16 },
    {
      id: 5,
      mangaName: "Death Note",
      authorName: "Tsugumi Ohba and Takeshi Obata",
      url: null,
    },
    {
      id: 6,
      mangaName: "Fullmetal Alchemist ",
      authorName: "Hiromu Arakawa",
      url: 150,
    },
    { id: 7, mangaName: "Bleach", authorName: "Tite Kubo", url: 44 },
    { id: 8, mangaName: "Tokyo Ghoul", authorName: "Sui Ishida", url: 36 },
    {
      id: 9,
      mangaName: "My Hero Academia",
      authorName: "Kohei Horikoshi",
      url: 65,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{ m: 1 }}
      />
    </div>
  );
}
