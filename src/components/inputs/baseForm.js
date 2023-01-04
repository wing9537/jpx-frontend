import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import { Box, Button } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { form } from "../../common/constant";

function BaseForm({ modelObj = {}, onSubmit = () => {}, children, ...rest }) {
  const methods = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: modelObj,
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const [formStatus, setFormStatus] = useState(form.edit);
  const { t } = useTranslation("common");

  const submitAction = () => {
    console.log("Is Form Submitted.");
    setFormStatus(form.confirm);
  };

  const confirmAction = () => {
    console.log("Is Form confirmed.");
    setFormStatus(form.completed);
  };

  const backAction = () => {
    console.log("Back to form filling.");
    setFormStatus(form.edit);
  };

  const resetAction = () => {
    console.log("Is Form reset");
    setFormStatus(form.edit);
    methods.reset(modelObj);
  };

  console.log("modelObj", methods.watch());

  return (
    <FormProvider formStatus={formStatus} {...methods}>
      <Box
        m={4}
        component="form"
        autoComplete="off"
        onSubmit={methods.handleSubmit(submitAction)}
        {...rest}
      >
        {formStatus != form.completed && <Box>{children}</Box>}
        {formStatus == form.completed && (
          <Box m={4} textAlign="center">
            <br />
            <h1>{t("title")}</h1>
            <TaskAltIcon sx={{ fontSize: 75 }} color="success" />
          </Box>
        )}
        <Box mx={8} display="flex">
          {formStatus == form.completed && (
            <Button
              sx={{ mx: "auto" }}
              color="secondary"
              size="large"
              variant="contained"
              onClick={resetAction}
            >
              {t("home")}
            </Button>
          )}
          {formStatus == form.confirm && (
            <Button
              sx={{ ml: "auto", mr: "10px" }}
              color="secondary"
              size="large"
              variant="contained"
              onClick={backAction}
            >
              {t("back")}
            </Button>
          )}
          {formStatus == form.confirm && (
            <Button
              sx={{ ml: "10px", mr: "auto" }}
              color="success"
              size="large"
              variant="contained"
              onClick={confirmAction}
            >
              {t("confirm")}
            </Button>
          )}
          {formStatus == form.edit && (
            <Button
              sx={{ mx: "auto" }}
              type="submit"
              color="info"
              size="large"
              variant="contained"
            >
              {t("submit")}
            </Button>
          )}
        </Box>
      </Box>
    </FormProvider>
  );
}

export default BaseForm;
