import Sidebar from "../components/layout/Sidebar";
import DataTable from "../components/table/Table";
import { Stack, Box, Button } from "@mui/material";
import BaseForm from "../components/inputs/baseForm";
import BaseInput from "../components/inputs/baseInput";
import { useTranslation } from "react-i18next";

function Setting() {
  const { t } = useTranslation("setting");

  const modelObj = {
    firstname: "",
    lastname: "",
  };

  const limit = {
    mangaName: { min: 1, max: -1 },
    authorName: { min: 1, max: -1 },
  };

  return (
    <Stack direction="row">
      <Sidebar />
      <Box sx={{ width: "100%" }}>
        <Stack direction="column">
          <BaseForm mx={0} modelObj={modelObj}>
            <BaseInput
              name="mangaName"
              type="text"
              label={t("mangaName")}
              limit={limit.mangaName}
              sx={{ mx: 0 }}
            />
            <BaseInput
              name="authorName"
              type="text"
              label={t("authorName")}
              limit={limit.authorName}
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
    </Stack>
  );
}

export default Setting;
