import React from 'react'
import {device} from '@/styles/BreakPoints'
import styled from 'styled-components'

const StyledContainer = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 1rem 0;
	text-align: center;
	@media ${device.lg} {
		max-width: 900px;
	}

	@media ${device.md} {
		max-width: 768px;
		padding: 1rem 1rem;
	}

	@media ${device.sm} {
		padding: 1rem 1rem;
		max-width: none;
	}
`

export const Container: React.FC = ({children}) => {
	return <StyledContainer>{children}</StyledContainer>
}