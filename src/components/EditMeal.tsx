import { View } from 'react-native';
import { Text } from 'react-native-paper';
import createStyles from "../styles/base.js";

export default function EditMeal() {
    const styles = createStyles();

    return (
        <View style={styles.container}>
            <Text variant='displayMedium'>Edit Meal</Text>
        </View>
    )
}
