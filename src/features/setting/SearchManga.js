import { Stack, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import DataTable from "../../components/table/Table";
import BaseForm from "../../components/inputs/baseForm";
import BaseInput from "../../components/inputs/baseInput";
import SettingMenu from "./SettingMenu";

function SearchManga() {
  const { t } = useTranslation("setting");
  const navigate = useNavigate();

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

  return (
    <Stack direction="row">
      <SettingMenu />
      <Box sx={{ width: "100%" }}>
        <Stack direction="column">
          <BaseForm mx={0} modelObj={modelObj}>
            <BaseInput
              name="name"
              type="text"
              label={t("mangaName")}
              limit={limit.name}
              sx={{ mx: 0 }}
            />
            <BaseInput
              name="author"
              type="text"
              label={t("authorName")}
              limit={limit.author}
              sx={{ mx: 0 }}
            />
          </BaseForm>
        </Stack>
        <Stack direction="row">
          <Button onClick={handleMangaCreate}>Create</Button>
          <Button>Search</Button>
        </Stack>
        <DataTable />
      </Box>
    </Stack>
  );
}

export default SearchManga;
