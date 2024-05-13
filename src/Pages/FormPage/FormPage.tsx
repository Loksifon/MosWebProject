import React from 'react'
import { Container } from '@/components/Layout'
import { Title } from '@/components/UI'
import { Form } from '@/components/Form/Form'
import { FormPDF } from '@/components/Form/FormPdf'

export const FormPage = () => {
	return (
		<Container>
			<Title>FormPage</Title>
			<Form />
			<FormPDF/>
		</Container>
	)
}


