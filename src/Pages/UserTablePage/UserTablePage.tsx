import React from 'react'
import { UserTable } from '@/components/UserTable/UserTable'
import { UserData } from '@/utils/constants/Constants'
export const UserTablePage = () => {
	return (
		<>
			<h1>UserTablePage</h1>
			<UserTable userData={UserData}/>
		</>
	)
}