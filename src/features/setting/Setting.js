import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import Sidebar from "./Sidebar";
import SearchManaga from "./SearchManaga";
import Profile from "./Profile";
import { getSetting, selectOption } from "../../redux/settingSlice";
import { useSelector } from "react-redux";

function Setting() {
  const selectedOption = useSelector(getSetting);
  console.log(selectedOption);

  return (
    <Stack direction="row">
      <Sidebar />
      {(function () {
        switch (selectedOption) {
          case "profile":
            return <Profile />;
          case "searchManga":
            return <SearchManaga />;
          default:
            break;
        }
      })()}
    </Stack>
  );
}

export default Setting;
