import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput'
import { loginValidationSchema } from '../schemas/login'

const initialValues = {
	email: '',
	password: '',
}

const FormikInputValue = ({ name, ...props }) => {
	const [field, meta, helpers] = useField(name)
	return (
		<>
			<StyledTextInput
				error={meta.error}
				value={field.value}
				onChangeText={value => helpers.setValue(value)}
				{...props}
			/>
			{meta.error && <Text style={styles.error}>{meta.error}</Text>}
		</>
	)
}

export default function Login() {
	return (
		<Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
			{({ handleChange, handleSubmit, values }) => {
				return (
					<View style={styles.form}>
						<FormikInputValue placeholder='Email' name='email' />
						<FormikInputValue placeholder='Password' name='password' secureTextEntry />
						<Button onPress={handleSubmit} title='Log in' />
					</View>
				)
			}}
		</Formik>
	)
}

const styles = StyleSheet.create({
	form: {
		margin: 20,
	},
	error: {
		color: 'red',
	},
})
