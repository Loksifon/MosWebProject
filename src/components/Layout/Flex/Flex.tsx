import React from 'react'
import styled from 'styled-components'

interface IFlexProps {
	direction?: string
	justify?: string
	align?: string
	gap?: string
}

const StyledFlex = styled.div`
	display: flex;
	flex-direction: ${props => props.direction || 'row'};
	justify-content: ${props => props.justify || 'stretch'};
	align-items: ${props => props.align || 'stretch'};
	gap: ${props => props.gap || '0'};
`

const StyledFlexUl = styled.ul`
	display: flex;
	flex-direction: ${props => props.direction || 'row'};
	justify-content: ${props => props.justify || 'stretch'};
	align-items: ${props => props.align || 'stretch'};
	gap: ${props => props.gap || '0'};
`

export const Flex = (props: IFlexProps) => {
	return <StyledFlex {...props} />
}

export const FlexUl = (props: IFlexProps) => {
	return <StyledFlexUl {...props} />
}