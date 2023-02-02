import moment from "moment";
import { date, regex } from "./constant";

const isValidDate = (dateStr, format = date.format) => {
  return moment(dateStr, format, true).isValid();
};

const isValidEmail = (str) => {
  return regex.email.test(str);
};

export { isValidDate, isValidEmail };
