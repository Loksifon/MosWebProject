import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
	color: ${({ theme }) => theme.colors.text};
	text-align: center;
	margin: 0 0 1rem 0;
`

export const Title = (props) => {
	return <StyledTitle {...props} />
}