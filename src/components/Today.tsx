import { View } from "react-native";
import { Link } from 'react-router-native';
import { Text, Button } from 'react-native-paper';
import createStyles from "../styles/base.js";


export default function Today() {
    const styles = createStyles();
    
    return (
        <View style={styles.container}>
            <Text variant='displayMedium' style={styles.header}>
				Today
			</Text>
            <Link to='/badlink' underlayColor='transparent'>
                <Button mode='elevated'>
                    <Text>This button has a bad link</Text>
                </Button>
            </Link>
        </View>
    )
}