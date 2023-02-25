import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import BaseForm from "../../components/inputs/baseForm";
import BaseInput from "../../components/inputs/baseInput";
import SettingMenu from "./SettingMenu";

import { useTranslation } from "react-i18next";

function MangaDetails() {
  const { t } = useTranslation("setting");

  const modelObj = {
    name: "",
    author: "",
    desc: "",
    link: "",
    coverPage: "",
    latestChapter: "",
  };

  const limit = {
    name: { min: 1, max: -1 },
    author: { min: 1, max: -1 },
    desc: { min: -1, max: -1 },
    link: { min: 1, max: -1 },
    coverPage: { min: -1, max: -1 },
    latestChapter: { min: -1, max: -1 },
  };

  const onSubmit = (data) => {};

  return (
    <Stack direction="row">
      <SettingMenu />
      <Stack direction="column">
        <BaseForm mx={0} modelObj={modelObj} onSubmit={onSubmit}>
          <BaseInput
            name="name"
            type="text"
            label={t("mangaName")}
            limit={limit.name}
            sx={{ mx: 0 }}
            fullWidth
          />
          <BaseInput
            name="author"
            type="text"
            label={t("mangaAuthor")}
            limit={limit.author}
            sx={{ mx: 0 }}
            fullWidth
          />
          <BaseInput
            name="desc"
            type="text"
            label={t("mangaDesc")}
            limit={limit.desc}
            sx={{ mx: 0 }}
            fullWidth
          />
          <BaseInput
            name="link"
            type="text"
            label={t("mangaLink")}
            limit={limit.link}
            sx={{ mx: 0 }}
            fullWidth
          />
          <Button>Upload coverPage</Button>
          <BaseInput
            name="latestChapter"
            type="text"
            label={t("latestChapter")}
            limit={limit.latestChapter}
            sx={{ mx: 0 }}
            fullWidth
          />
        </BaseForm>
      </Stack>
    </Stack>
  );
}

export default MangaDetails;
