import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import { Box, Button } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { FORM } from "../../common/constant";

function BaseForm({
  mode = FORM.edit, // initial state
  isStateful = true, // enable form state
  modelObj = {},
  refreshModel, // refresh parent modelObj without update UI
  onSubmit = async () => true,
  onConfirm = async () => true,
  submitLabel,
  buttonGroups,
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

  const [formStatus, setFormStatus] = useState(mode);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation("common");

  const submitAction = () => {
    console.log("Is Form Submitted.");
    setIsLoading(true);
    onSubmit(methods.getValues()).then((isSucceed) => {
      if (isStateful) setFormStatus(isSucceed ? FORM.confirm : FORM.edit);
      setIsLoading(false);
    });
  };

  const confirmAction = () => {
    console.log("Is Form Confirmed.");
    setIsLoading(true);
    onConfirm(methods.getValues()).then((isSucceed) => {
      if (isStateful) setFormStatus(isSucceed ? FORM.completed : FORM.edit);
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
        <Box mx={8} display="flex" justifyContent="center" alignItems="center">
          {formStatus == FORM.completed && (
            <Button
              sx={{ mx: "5px" }}
              color="secondary"
              size="large"
              variant="contained"
              onClick={resetAction}
              disabled={isLoading}
            >
              {t("button.home")}
            </Button>
          )}
          {formStatus == FORM.confirm && (
            <Button
              sx={{ mx: "5px" }}
              color="secondary"
              size="large"
              variant="contained"
              onClick={backAction}
              disabled={isLoading}
            >
              {t("button.back")}
            </Button>
          )}
          {formStatus == FORM.confirm && (
            <Button
              sx={{ mx: "5px" }}
              color="success"
              size="large"
              variant="contained"
              onClick={confirmAction}
              disabled={isLoading}
            >
              {t("button.confirm")}
            </Button>
          )}
          {formStatus == FORM.edit && (
            <Button
              sx={{ mx: "5px" }}
              type="submit"
              color="info"
              size="large"
              variant="contained"
              disabled={isLoading}
            >
              {submitLabel ? submitLabel : t("button.submit")}
            </Button>
          )}
          {buttonGroups}
        </Box>
      </Box>
    </FormProvider>
  );
}

export default BaseForm;
