import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Text } from "react-native-paper";
import createStyles from "./../styles/base.js";
import { supabase } from "../../lib/supabase";

export default function CreateAccount() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const styles = createStyles();

	async function signUpWithEmail() {
		setLoading(true);
		const { error } = await supabase.auth.signUp({
			email: email,
			password: password,
		});

		if (error) Alert.alert(error.message);
		setLoading(false);
	}

	return (
		<View style={styles.container}>
			<Text variant="displayMedium">Create Account</Text>
		</View>
	);
}
