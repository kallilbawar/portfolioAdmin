import {Avatar, TobBar } from "components";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export function TopBarContainer(){

    const handleClick = ()=>{

        localStorage.setItem("user", JSON.stringify(false));
    }

    return(
        <TobBar>
         <Avatar  />
         <PowerSettingsNewIcon style={{cursor: "pointer", marginRight: "1.4rem"}} onClick= {handleClick} />
        </TobBar>
    )
}