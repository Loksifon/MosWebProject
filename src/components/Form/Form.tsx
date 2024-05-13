import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@/components/UI'
import { ErrorContainer, ErrorMessage, StyledForm, StyledInput, StyledLabel } from './Form.styles';

interface IForm {
  age: string;
  name: string;
  email: string;
}

export const Form: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm<IForm>()
  const [formSubmissions, setFormSubmissions] = useState<IForm[]>([])

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data)
    setFormSubmissions((prevSubmissions) => [...prevSubmissions, data])
    reset() 
  }

  const handleBlur = async (fieldName: keyof IForm) => {
    await trigger(fieldName)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
			<StyledLabel >
        Name:
        <StyledInput placeholder="*Vlad"
					{...register('name', { required: true, minLength: 2, pattern: /^[a-zA-ZА-Яа-я ]+$/ })}
          hasError={errors.name !== undefined}
          onBlur={() => handleBlur('name')}
        />
      </StyledLabel>
      {errors.name && (
        <ErrorContainer>
					<ErrorMessage>Это поле обязательно и должно содержать только буквы и пробелы.</ErrorMessage>
        </ErrorContainer>
      )}
      <StyledLabel>
        Age:
				<StyledInput placeholder="*18"
          {...register('age', { required: true, maxLength: 2, pattern: /^\d+$/ })}
          hasError={errors.age !== undefined}
          onBlur={() => handleBlur('age')}
        />
      </StyledLabel>
      {errors.age && (
        <ErrorContainer>
					<ErrorMessage>Это поле обязательно и должно содержать только цифры.</ErrorMessage>
        </ErrorContainer>
      )}
      <StyledLabel>
        Email:
				<StyledInput placeholder="*Email"
          {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
          hasError={errors.email !== undefined}
          onBlur={() => handleBlur('email')}
        />
      </StyledLabel>
      {errors.email && (
        <ErrorContainer>
					<ErrorMessage>Это поле обязательно и должно содержать правильный адрес электронной почты.</ErrorMessage>
        </ErrorContainer>
      )}
      <Button type="submit" disabled={Object.keys(errors).length > 0}>
        Save
      </Button>
      {formSubmissions.map((submission, index) => (
        <div key={index}>
          <p>Name: {submission.name}</p>
          <p>Age: {submission.age}</p>
          <p>Email: {submission.email}</p>
        </div>
      ))}
    </StyledForm>
  )
}