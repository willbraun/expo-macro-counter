import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { supabase } from '../../lib/supabase';
import createStyles from '../styles/base.js';
import { setSessionState } from '../redux/slices/sessionSlice';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './../redux/slices/counter'; // importing actions used by dispatch
import { RootState } from '../redux/store';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const styles = createStyles();

	// gets the redux state, counter reducer within that state, and count variable within that reducer
	// state is defined just within this anonymous function
	const count = useSelector((state: RootState) => state.counter.count)

	// dispatch allows us to call any action from any reducer that we want
	const dispatch = useDispatch();

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
			// setSessionState(session.data)
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

			<Text>The count is {count}</Text>
			<Button onPress={() => dispatch(increment())}>Increment</Button>
			<Button onPress={() => dispatch(decrement())}>Decrement</Button>

		</View>
	);
}
