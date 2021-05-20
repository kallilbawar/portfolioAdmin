import * as S from "./Avatar.style";
import  * as A from "@material-ui/core";

export function Avatar({name, path}) {
  return (
    <S.Avatar>
      <A.Avatar name={name} src={path} />
    </S.Avatar>
  );
}
