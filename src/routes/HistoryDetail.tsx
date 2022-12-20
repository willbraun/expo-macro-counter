import { View } from 'react-native';
import { Text } from 'react-native-paper';
import createStyles from "./../styles/base.js";

export default function HistoryDetail() {
    const styles = createStyles();

    return (
        <View style={styles.container}>
            <Text variant='displayMedium'>History Detail</Text>
        </View>
    )
}