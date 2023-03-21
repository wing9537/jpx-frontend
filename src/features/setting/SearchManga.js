import React, { useState } from "react";
import { Stack, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// components
import BaseTable from "../../components/inputs/baseTable";
import BaseForm from "../../components/inputs/baseForm";
import BaseInput from "../../components/inputs/baseInput";
import SettingMenu from "./SettingMenu";
import { searchManga } from "../../redux/mangaThunk";

function SearchManga() {
  const { t } = useTranslation("setting");
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const headers = [
    { field: "name", headerName: t("manga.name"), width: 0.3 },
    { field: "author", headerName: t("manga.author"), width: 0.3 },
    { field: "link", headerName: "URL", width: 0.3 },
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
    navigate("/setting/manga/new");
  };

  const handleViewClick = (id) => {
    navigate(`/setting/manga/${id}`);
  };

  const onSubmit = async (formData) => {
    const result = await dispatch(searchManga(formData));
    setRows(result.payload || []);
    return false; // prevent form confirm
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
        <BaseTable rows={rows} headers={headers} viewAction={handleViewClick} />
      </Box>
    </Stack>
  );
}

export default SearchManga;
