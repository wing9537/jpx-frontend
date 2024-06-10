import React, { useState, useEffect } from "react";
import { Stack, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// components
import BaseTable from "../../components/inputs/BaseTable";
import BaseForm from "../../components/inputs/BaseForm";
import BaseInput from "../../components/inputs/BaseInput";
import SettingMenu from "./SettingMenu";
import { searchManga } from "../../redux/mangaThunk";

function MangaSearch() {
  const { t } = useTranslation(["setting", "common"]);
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const headers = [
    { field: "name", headerName: t("manga.name"), width: 0.3 },
    { field: "author", headerName: t("manga.author"), width: 0.25 },
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

  useEffect(() => {
    onSubmit(modelObj);
  }, []);

  return (
    <Stack direction="row">
      <SettingMenu />
      <Box sx={{ width: "100%" }}>
        <Stack direction="column">
          <BaseForm
            mx={1}
            modelObj={modelObj}
            isStateful={false}
            onSubmit={onSubmit}
            submitLabel={t("common:button.search")}
            buttonGroups={
              <Button
                onClick={handleMangaCreate}
                variant="outlined"
                size="large"
                sx={{ mx: "5px", order: "-1" }}
              >
                {t("common:button.create")}
              </Button>
            }
          >
            <BaseInput
              name="name"
              type="text"
              label={t("manga.name")}
              limit={limit.name}
              sx={{ mx: 1 }}
            />
            <BaseInput
              name="author"
              type="text"
              label={t("manga.author")}
              limit={limit.author}
              sx={{ mx: 1 }}
            />
          </BaseForm>
        </Stack>
        <BaseTable rows={rows} headers={headers} viewAction={handleViewClick} />
      </Box>
    </Stack>
  );
}

export default MangaSearch;
