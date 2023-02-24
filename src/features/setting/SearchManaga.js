import { Stack, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import Sidebar from "./Sidebar";
import DataTable from "../../components/table/Table";
import BaseForm from "../../components/inputs/baseForm";
import BaseInput from "../../components/inputs/baseInput";

function Setting() {
  const { t } = useTranslation("setting");

  const modelObj = {
    name: "",
    author: "",
  };

  const limit = {
    name: { min: -1, max: -1 },
    author: { min: -1, max: -1 },
  };

  return (
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
        <Button>Create</Button>
        <Button>Search</Button>
      </Stack>
      <DataTable />
    </Box>
  );
}

export default Setting;
