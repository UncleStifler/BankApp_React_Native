import React, { FC } from 'react'
import { TextInput } from 'react-native'
import tw from 'tailwind-rn'

interface IField {
	onChange: (value: string) => void
	value: string
	placeholder: string
	isSecure?: boolean
}

const Field: FC<IField> = ({ onChange, placeholder, value, isSecure }) => {
	return (
		<TextInput
			// showSoftInputOnFocus={false}
			placeholder={placeholder}
			onChangeText={onChange}
			value={value}
			secureTextEntry={isSecure}
			autoCapitalize='none'
			style={tw('rounded-xl bg-gray-100 mt-3 p-3 w-full')}
		/>
	)
}

export default Field
