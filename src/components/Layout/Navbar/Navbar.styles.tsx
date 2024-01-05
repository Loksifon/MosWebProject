import styled from 'styled-components'
import { NavLink } from 'react-router-dom'



	
export const NavLinkStyled = styled(NavLink)`
	&::after {
		content: "";
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 2px;
    width: 0px;
		background-color: ${({ theme }) => theme.colors.primary};
	}

	&:hover::after {
    width: 100%;
    transition-duration: .3s;
	}
`