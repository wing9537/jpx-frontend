import React, { useState } from "react";

import { Stack, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import DataTable from "../../components/inputs/baseTable";
import BaseForm from "../../components/inputs/baseForm";
import BaseInput from "../../components/inputs/baseInput";
import SettingMenu from "./SettingMenu";

function SearchManga() {
  const { t } = useTranslation("setting");
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const headers = [
    { field: "name", headerName: t("manga.name"), percent: 0.3 },
    { field: "author", headerName: t("manga.author"), percent: 0.3 },
    { field: "url", headerName: "URL", percent: 0.3 },
  ];

  const modelObj = {
    name: "",
    author: "",
  };

  const limit = {
    name: { min: -1, max: -1 },
    author: { min: -1, max: -1 },
  };

  const handleMangaCreate = () => {
    navigate(`/setting/manga/new`);
  };

  const handleViewClick = (id) => {
    navigate(`/setting/manga/${id}`);
  };

  const onSubmit = async (formData) => {
    console.log(formData);
    const params = new URLSearchParams(formData);
    const response = await fetch(`/jpx/manga/search?${params}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setRows(data);
    }
    // prevent form confirm
    return false;
  };

  return (
    <Stack direction="row">
      <SettingMenu />
      <Box sx={{ width: "100%" }}>
        <Stack direction="column">
          <BaseForm mx={0} modelObj={modelObj} onSubmit={onSubmit}>
            <BaseInput
              name="name"
              type="text"
              label={t("manga.name")}
              limit={limit.name}
              sx={{ mx: 0 }}
            />
            <BaseInput
              name="author"
              type="text"
              label={t("manga.author")}
              limit={limit.author}
              sx={{ mx: 0 }}
            />
          </BaseForm>
        </Stack>
        <Stack direction="row">
          <Button onClick={handleMangaCreate}>Create</Button>
          <Button>Search</Button>
        </Stack>
        <DataTable
          rows={rows}
          headers={headers}
          onViewAction={handleViewClick}
        />
      </Box>
    </Stack>
  );
}

export default SearchManga;
