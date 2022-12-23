import { View } from "react-native";
import { Link } from 'react-router-native';
import { Text, Button } from 'react-native-paper';
import createStyles from "../styles/base.js";


export default function ScanBarcode() {
    const styles = createStyles();
    
    return (
        <View style={styles.container}>
            <Text variant='displayMedium' style={styles.header}>
				Scan Barcode
			</Text>
        </View>
    )
}