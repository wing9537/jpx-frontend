import moment from "moment";
import { date } from "./constant";

const isValidDate = (dateStr, format = date.format) => {
  return moment(dateStr, format, true).isValid();
};

export { isValidDate };
