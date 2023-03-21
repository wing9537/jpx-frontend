import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

// components
import BaseForm from "../../components/inputs/baseForm";
import BaseInput from "../../components/inputs/baseInput";
import SettingMenu from "./SettingMenu";
import { newManga, getManga } from "../../redux/mangaThunk";

function MangaDetails() {
  const { t } = useTranslation("setting");
  const { id } = useParams();
  const dispatch = useDispatch();

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

  const onConfirm = async (formData) => {
    const result = await dispatch(newManga(formData));
    return result.payload;
  };

  useEffect(() => {
    if (id !== "new") {
      dispatch(getManga(id)).then((payload) => console.log(payload));
    }
  }, [id]);

  return (
    <Stack direction="row">
      <SettingMenu />
      <Stack direction="column">
        <BaseForm mx={0} modelObj={modelObj} onConfirm={onConfirm}>
          <BaseInput
            name="name"
            type="text"
            label={t("manga.name")}
            limit={limit.name}
            sx={{ mx: 0 }}
            fullWidth
          />
          <BaseInput
            name="author"
            type="text"
            label={t("manga.author")}
            limit={limit.author}
            sx={{ mx: 0 }}
            fullWidth
          />
          <BaseInput
            name="desc"
            type="text"
            label={t("manga.desc")}
            limit={limit.desc}
            sx={{ mx: 0 }}
            fullWidth
          />
          <BaseInput
            name="link"
            type="text"
            label={t("manga.link")}
            limit={limit.link}
            sx={{ mx: 0 }}
            fullWidth
          />
          <Button>Upload coverPage</Button>
          <BaseInput
            name="latestChapter"
            type="text"
            label={t("manga.latestChapter")}
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
