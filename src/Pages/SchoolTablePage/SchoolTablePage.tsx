import React from 'react'
import { SchoolTable } from '@/components/SchoolTable/SchoolTable'
import { Container } from '@/components/Layout'
import { Title } from '@/components/UI'
export const SchoolTablePage = () => {
	return (
		<Container>
			<Title>SchoolTablePage</Title>
			<SchoolTable/>
		</Container>
	)
}