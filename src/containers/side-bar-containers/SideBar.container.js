import { List, SideBar } from "components";
import { Link } from "react-router-dom";

const SideMenu = ["users", "contracts", "taches", "projet"];

export function SideBarContainer() {
  return (
    <SideBar>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0",
          minWidth: "120px",
        }}
      >
        {SideMenu.map((item, index) => (
          <List key={index} id={item} iconName="M.AccessAlarmRounded">
            <Link to={"/" + item }>{item}</Link>
          </List>
        ))}
      </ul>
    </SideBar>
  );
}
