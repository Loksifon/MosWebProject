import React from 'react'
import { UserTable } from '@/components/UserTable/UserTable'
import { UserData } from '@/utils/constants/Constants'
import { Container } from '@/components/Layout/index'
import { Title } from '@/components/UI'
export const UserTablePage = () => {
	return (
		<Container>
			<Title>UserTablePage</Title>
			<UserTable userData={UserData}/>
		</Container>
	)
}