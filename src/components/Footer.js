import "./Footer.css";

function Footer(props) {
  return <div className={props.isSidebarShow ? "Sidebar sidebarActive" : "Sidebar"}></div>;
}
export default Footer;
