import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import { Box, Button } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { FORM } from "../../common/constant";

function BaseForm({
  modelObj = {},
  onSubmit = async () => true,
  onConfirm = async () => true,
  refreshModel, // refresh parent modelObj without update UI
  children,
  ...rest
}) {
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

  const [formStatus, setFormStatus] = useState(FORM.edit);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation("common");

  const submitAction = () => {
    console.log("Is Form Submitted.");
    setIsLoading(true);
    onSubmit(methods.getValues()).then((isSucceed) => {
      setFormStatus(isSucceed ? FORM.confirm : FORM.edit);
      setIsLoading(false);
    });
  };

  const confirmAction = () => {
    console.log("Is Form Confirmed.");
    setIsLoading(true);
    onConfirm(methods.getValues()).then((isSucceed) => {
      setFormStatus(isSucceed ? FORM.completed : FORM.edit);
      setIsLoading(false);
    });
  };

  const backAction = () => {
    console.log("Back to form Filling.");
    setFormStatus(FORM.edit);
  };

  const resetAction = () => {
    console.log("Is Form reset");
    setFormStatus(FORM.edit);
    methods.reset(modelObj);
  };

  useEffect(() => {
    const subscription = methods.watch((value, { name, type }) => {
      console.log("modelObj", value, name, type);
      if (refreshModel) refreshModel(value);
    });
    return () => subscription.unsubscribe();
  }, [methods.watch]);

  return (
    <FormProvider formStatus={formStatus} {...methods}>
      <Box
        m={4}
        component="form"
        autoComplete="off"
        onSubmit={methods.handleSubmit(submitAction)}
        {...rest}
      >
        {formStatus != FORM.completed && <Box>{children}</Box>}
        {formStatus == FORM.completed && (
          <Box m={4} textAlign="center">
            <br />
            <h1>{t("title")}</h1>
            <TaskAltIcon sx={{ fontSize: 75 }} color="success" />
          </Box>
        )}
        <Box mx={8} display="flex">
          {formStatus == FORM.completed && (
            <Button
              sx={{ mx: "auto" }}
              color="secondary"
              size="large"
              variant="contained"
              onClick={resetAction}
              disabled={isLoading}
            >
              {t("home")}
            </Button>
          )}
          {formStatus == FORM.confirm && (
            <Button
              sx={{ ml: "auto", mr: "10px" }}
              color="secondary"
              size="large"
              variant="contained"
              onClick={backAction}
              disabled={isLoading}
            >
              {t("back")}
            </Button>
          )}
          {formStatus == FORM.confirm && (
            <Button
              sx={{ ml: "10px", mr: "auto" }}
              color="success"
              size="large"
              variant="contained"
              onClick={confirmAction}
              disabled={isLoading}
            >
              {t("confirm")}
            </Button>
          )}
          {formStatus == FORM.edit && (
            <Button
              sx={{ mx: "auto" }}
              type="submit"
              color="info"
              size="large"
              variant="contained"
              disabled={isLoading}
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
