import react, { FC } from "react";
import { CardStyled, CardText, CardTitle } from "./CardUniversity.styled";

export interface IUniversity {
  country: string;
  name: string;
}

export const CardUniversity: FC<{ data: IUniversity }> = ({ data }) => {
  return (
    <CardStyled>
      <CardTitle>{data.name}</CardTitle>
      <CardText>{data.country}</CardText>
    </CardStyled>
  );
};
