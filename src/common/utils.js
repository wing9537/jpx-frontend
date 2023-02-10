import moment from "moment";
import { DATE, REGEX } from "./constant";

const isValidDate = (dateStr, format = DATE.format) => {
  return moment(dateStr, format, true).isValid();
};

const isValidEmail = (str) => {
  return REGEX.email.test(str);
};

const isValidMobile = (str) => {
  return REGEX.mobile.test(str);
};

export { isValidDate, isValidEmail, isValidMobile };
