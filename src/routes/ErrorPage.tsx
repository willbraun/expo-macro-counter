import { View } from "react-native";
import { Link } from 'react-router-native';
import { Button, Text } from 'react-native-paper';
import createStyles from "../styles/base";

export default function ErrorPage() {
	const styles = createStyles();

	return (
		<View style={styles.container}>
			<Text variant='displayMedium'>Page not found</Text>

			<Link to='/' underlayColor='transparent'>
                <Button mode='elevated'>
                    <Text>Back to Today</Text>
                </Button>
            </Link>
		</View>
	);
}
