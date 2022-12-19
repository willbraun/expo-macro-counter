import { View } from "react-native";
import { useNavigate } from 'react-router-native';
import { Button, Text } from 'react-native-paper';
import createStyles from "../styles/base";

export default function ErrorPage() {
	const styles = createStyles();
	const navigate = useNavigate();

	return (
		<View style={styles.container}>
			<Text variant='displayMedium'>Page not found</Text>

			<Button mode='elevated' onPress={() => navigate('/')}>
                <Text>Back to Today</Text>
            </Button>
		</View>
	);
}
