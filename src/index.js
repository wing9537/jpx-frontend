import ReactDOM from "react-dom/client";
import App from "./App";
import "./theme.css";
import "./i18n";
import Cookies from "universal-cookie";

window.cookies = new Cookies();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
