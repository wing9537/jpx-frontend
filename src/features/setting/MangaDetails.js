import { useParams } from "react-router-dom";

import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import BaseForm from "../../components/inputs/baseForm";
import BaseInput from "../../components/inputs/baseInput";
import SettingMenu from "./SettingMenu";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function MangaDetails() {
  const { t } = useTranslation("setting");
  const { id } = useParams();
  console.log("params", id);

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
    console.log(formData);
    const response = await fetch("/jpx/manga/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return response.ok;
  };

  useEffect(() => {
    if (id !== "new") {
      const fetchManga = async () => {
        const response = await fetch(`/jpx/manga/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        }
      };
      fetchManga();
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
