import React from 'react'
import styled from 'styled-components'

const StyledText = styled.p`
	color: ${({ theme }) => theme.colors.text};
`

export const Text = (props) => {
	return <StyledText {...props} />
}