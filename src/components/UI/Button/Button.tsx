import React from 'react'
import { ButtonAuth } from './Button.styles'

export interface IButtonProps {
	onClick: () => void;
	children: React.ReactNode;
	
}
export const Button: React.FC = ({onClick, children}) => {
	return (
		<ButtonAuth onClick={onClick}>{children}</ButtonAuth>
	)
}