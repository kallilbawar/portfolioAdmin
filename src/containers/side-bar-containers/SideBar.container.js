import { List, SideBar } from "components";

const SideMenu = ["Users", "Contrats", "Taches", "Projet"];

export function SideBarContainer() {
  return (
    <SideBar>
      <ul
      style = {{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0',
        minWidth: '120px'
    }}>
    

        {SideMenu.map((item, index) => <List key={index} id={item}>{item}</List>)}
      </ul>
    </SideBar>
  );
}
