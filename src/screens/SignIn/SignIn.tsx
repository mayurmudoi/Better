import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import CustomButton from '../../customs/Button';
import styles from './styles';
import {Formik} from 'formik';

const validateEmail = (email: any) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

const SignIn = ({toggleView}: any) => (
	<Formik
		initialValues={{email: '', password: ''}}
		onSubmit={(values) => {
			if (!values.email || !values.password) {
				Alert.alert('Error', 'All fields are required.');
				return;
			}

			if (!validateEmail(values.email)) {
				Alert.alert('Error', 'Invalid email address.');
				return;
			}

			if (values.password.length < 6) {
				Alert.alert('Error', 'Password must be at least 6 characters long.');
				return;
			}

			Alert.alert('Success', `${values.email} Successfully Logged In`);
		}}
	>
		{({handleChange, handleBlur, handleSubmit, values}) => (
			<View style={styles.container}>
				<Text style={styles.title}>{'WELCOME BACK'}</Text>
				<Text style={styles.description}>
					{'Please enter your details to sign in'}
				</Text>
				<View style={styles.box}>
					<TextInput
						onChangeText={handleChange('email')}
						onBlur={handleBlur('email')}
						placeholder="E-mail"
						value={values.email}
						style={styles.input}
						keyboardType="email-address"
					/>
					<TextInput
						onChangeText={handleChange('password')}
						onBlur={handleBlur('password')}
						placeholder="Password"
						value={values.password}
						style={styles.input}
						secureTextEntry
					/>
					<TouchableOpacity style={styles.forgotPasswordContainer}>
						<Text style={styles.forgotPassword}>Forgot Password?</Text>
					</TouchableOpacity>
					<CustomButton title={'Login'} onPress={handleSubmit}/>
					<View style={styles.hlRow}>
						<View style={styles.hl}/>
						<Text style={styles.orText}>OR</Text>
						<View style={styles.hl}/>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.text}>Don't have an account?</Text>
						<TouchableOpacity onPress={toggleView}>
							<Text style={[styles.text, styles.signInText]}>{' Sign up.'}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)}
	</Formik>
);

const SignUp = ({toggleView}: any) => (
	<Formik
		initialValues={{
			loggedEmail: '',
			loggedPassword: '',
			loggedConfirmPassword: '',
		}}
		onSubmit={(values) => {
			if (!values.loggedEmail || !values.loggedPassword || !values.loggedConfirmPassword) {
				Alert.alert('Error', 'All fields are required.');
				return;
			}

			if (!validateEmail(values.loggedEmail)) {
				Alert.alert('Error', 'Invalid email address.');
				return;
			}

			if (values.loggedPassword.length < 6) {
				Alert.alert('Error', 'Password must be at least 6 characters long.');
				return;
			}

			if (values.loggedPassword !== values.loggedConfirmPassword) {
				Alert.alert('Error', 'Passwords do not match.');
				return;
			}

			Alert.alert('Success', `${values.loggedEmail} Successfully Registered`);
		}}
	>
		{({handleChange, handleBlur, handleSubmit, values}) => (
			<View style={styles.container}>
				<Text style={styles.title}>{'CREATE ACCOUNT'}</Text>
				<Text style={styles.description}>
					{'Please enter your details to get started'}
				</Text>
				<View style={styles.box}>
					<TextInput
						onChangeText={handleChange('loggedEmail')}
						onBlur={handleBlur('loggedEmail')}
						placeholder="E-mail"
						value={values.loggedEmail}
						style={styles.input}
						keyboardType="email-address"
					/>
					<TextInput
						onChangeText={handleChange('loggedPassword')}
						onBlur={handleBlur('loggedPassword')}
						placeholder="Password"
						value={values.loggedPassword}
						style={styles.input}
						secureTextEntry
					/>
					<TextInput
						onChangeText={handleChange('loggedConfirmPassword')}
						onBlur={handleBlur('loggedConfirmPassword')}
						placeholder="Confirm Password"
						value={values.loggedConfirmPassword}
						style={styles.input}
						secureTextEntry
					/>
					<CustomButton title={'Register'} onPress={handleSubmit}/>
					<View style={styles.hlRow}>
						<View style={styles.hl}/>
						<Text style={styles.orText}>OR</Text>
						<View style={styles.hl}/>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.text}>Already have an account?</Text>
						<TouchableOpacity onPress={toggleView}>
							<Text style={[styles.text, styles.signInText]}>{' Sign in.'}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)}
	</Formik>
);

const MyForm = () => {
	const [isLogin, setIsLogin] = useState(false);

	const toggleView = () => {
		setIsLogin(!isLogin);
	};

	return (
		<View style={styles.container}>
			{!isLogin ? <SignIn toggleView={toggleView}/> : <SignUp toggleView={toggleView}/>}
		</View>
	);
};

export default MyForm;
