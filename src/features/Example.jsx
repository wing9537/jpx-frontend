import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";

// components
import BaseForm from "../components/inputs/BaseForm";
import BaseInput from "../components/inputs/BaseInput";
import BaseTextField from "../components/inputs/BaseTextField";
import BaseSelect from "../components/inputs/BaseSelect";
import BaseRadio from "../components/inputs/BaseRadio";
import BaseCheckbox from "../components/inputs/BaseCheckbox";
import BaseDatePicker from "../components/inputs/BaseDatePicker";

function Example() {
  const modelObj = {
    sampleText: "",
    customValid: "",
    sampleSelect: "",
    sampleRadio: "",
    sampleCheckbox: [],
    sampleDatePicker: "",
  };

  const limit = {
    sampleText: { min: 10, max: -1 },
    customValid: { min: 1, max: -1 },
    sampleSelect: { min: 1, max: -1 },
    sampleRadio: { min: 1, max: -1 },
    sampleCheckbox: { min: 1, max: 1 },
    sampleDatePicker: { min: 1, max: -1 },
  };

  const { t } = useTranslation("example");
  const sampleData = t("sampleData", { returnObjects: true });

  const validExactValue = (value) => {
    return value == "pass" || t("validate.exact", { text: "pass" });
  };

  return (
    <BaseForm modelObj={modelObj}>
      <h1 style={{ textAlign: "center" }}>{t("title")}</h1>
      <Box
        width={{ xs: "100%", md: "50%" }}
        display="inline-flex"
        flexWrap="wrap"
        justifyContent={{ xs: "center", md: "right" }}
      >
        <BaseInput
          name="sampleText"
          type="text"
          label={t("sampleText")}
          limit={limit.sampleText}
        />
        <BaseInput
          name="customValid"
          type="text"
          label={t("customValid")}
          rules={validExactValue}
          limit={limit.customValid}
        />
        <BaseInput
          name="sampleDatePicker"
          type="datepicker"
          label={t("sampleDatePicker")}
          limit={limit.sampleDatePicker}
        />
        <BaseInput
          name="sampleSelect"
          type="select"
          label={t("sampleSelect")}
          options={sampleData}
          limit={limit.sampleSelect}
        />
        <BaseInput
          name="sampleRadio"
          type="radio"
          label={t("sampleRadio")}
          options={sampleData}
          limit={limit.sampleRadio}
        />
        <BaseInput
          name="sampleCheckbox"
          type="checkbox"
          label={t("sampleCheckbox")}
          options={sampleData}
          limit={limit.sampleCheckbox}
        />
      </Box>
      <Box
        width={{ xs: "100%", md: "50%" }}
        display="inline-flex"
        flexWrap="wrap"
        justifyContent={{ xs: "center", md: "left" }}
      >
        <BaseTextField label={t("uncontrolled")} type="password" />
        <BaseTextField label={t("uncontrolled")} type="number" />
        <BaseDatePicker label={t("uncontrolled")} />
        <BaseSelect label={t("uncontrolled")} options={sampleData} />
        <BaseRadio label={t("uncontrolled")} options={sampleData} />
        <BaseCheckbox label={t("uncontrolled")} options={sampleData} />
      </Box>
    </BaseForm>
  );
}
export default Example;
