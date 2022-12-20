import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { supabase } from "../../lib/supabase";
import createStyles from "./../styles/base.js";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const styles = createStyles();


	async function signInWithEmail() {
		setLoading(true);
		const { error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});

		if (error) Alert.alert(error.message);
		setLoading(false);
	}

	return (
		<View style={styles.container}>
			<Text variant='displayMedium' style={styles.header}>
				Login
			</Text>
			<TextInput
				style={styles.textInput}
				label="Email"
				onChangeText={(text) => setEmail(text)}
				value={email}
				placeholder="email@address.com"
				autoCapitalize={"none"}
			/>
			<TextInput
				style={styles.textInput}
				label="Password"
				onChangeText={(text) => setPassword(text)}
				value={password}
				secureTextEntry={true}
				placeholder="Password"
				autoCapitalize={"none"}
			/>
			<Button mode='contained' onPress={signInWithEmail}>
				Log in
			</Button>
		</View>
	);
}
