import * as S from "./List.style";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


export function List({ children }) {
  return <S.List><PowerSettingsNewIcon />{children}</S.List>;
}
