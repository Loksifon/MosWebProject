import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavStyled = styled.nav`
	
`

export const UlStyled = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;
`
	
export const NavLinkStyled = styled(NavLink)`
	text-decoration: none;
	color: black;
	&::after {
		content: "";
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 2px;
    width: 0px;
    background-color: black;
	}

	&:hover::after {
    width: 100%;
    transition-duration: .3s;
	}
`