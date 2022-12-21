import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { supabase } from '../../lib/supabase';
import createStyles from './../styles/base.js';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const styles = createStyles();

	async function signInWithEmail() {
		setLoading(true);
		const session = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});
		console.log(session)

		if (session.error) {
			Alert.alert(session.error.message);
		}
		else {
			// call checkAuth function from redux
			console.log('to do - call checkAuth redux action');
		}
		setLoading(false);
	}

	return (
		<View style={styles.container}>
			<Text variant='displayMedium' style={styles.header}>
				Login
			</Text>
			<TextInput
				style={styles.textInput}
				label='Email'
				onChangeText={(text) => setEmail(text)}
				value={email}
				placeholder='email@address.com'
				autoCapitalize='none'
				autoCorrect={false}
				textContentType='emailAddress'
            	keyboardType='email-address'
			/>
			<TextInput
				style={styles.textInput}
				label='Password'
				onChangeText={(text) => setPassword(text)}
				value={password}
				placeholder='Password'
				autoCapitalize='none'
				autoCorrect={false}
				textContentType='password'
				secureTextEntry={true}
			/>
			<Button mode='contained' onPress={signInWithEmail}>
				Log in
			</Button>
		</View>
	);
}
