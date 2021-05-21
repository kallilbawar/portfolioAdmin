import * as S from './List.style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function List ({children}){


    return(
        
        <S.List>
            {children}
        </S.List>
    )
}