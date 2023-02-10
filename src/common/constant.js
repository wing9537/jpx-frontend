const FORM = {
  edit: "editing",
  confirm: "confirm",
  completed: "completed",
};

const DATE = {
  format: "DD/MM/YYYY",
  mask: "__/__/____",
};

const REGEX = {
  email: /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,
  mobile: /^$|^[0-9]{8}$/,
};

export { FORM, DATE, REGEX };
