import styled from 'styled-components';

export const FooterStyled = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
  text-align: center;
`