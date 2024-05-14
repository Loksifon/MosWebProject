import styled from "styled-components";

export const ButtonAuth = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition-duration: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
