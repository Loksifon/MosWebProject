import { DynamicPagination } from '@/components/DynamicPagination/DynamicPagination'
import { Container } from '@/components/Layout'
import { Title, Text } from '@/components/UI'
import React from 'react'

export const HomePage = () => {
	return (
		<Container>
			<Title>HomePage</Title>
			<Text>Это главная страница</Text>
			<DynamicPagination />
		</Container>
	)
}