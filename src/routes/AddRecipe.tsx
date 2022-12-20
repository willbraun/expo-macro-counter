import { View } from 'react-native';
import { Text } from 'react-native-paper';
import createStyles from "./../styles/base.js";

export default function AddRecipe() {
    const styles = createStyles();

    return (
        <View style={styles.container}>
            <Text variant='displayMedium'>Add Recipe</Text>
        </View>
    )
}