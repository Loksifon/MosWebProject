import React from "react";
import styled from "styled-components";

const StyledSubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
`;

export const SubTitle = (props) => {
  return <StyledSubTitle {...props} />;
};
