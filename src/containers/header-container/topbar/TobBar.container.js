import {Avatar, TobBar } from "components";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export function TopBarContainer(){

    return(
        <TobBar>
         <Avatar />
         <PowerSettingsNewIcon style={{cursor: "pointer", marginRight: "1.4rem"}} />
        </TobBar>
    )
}