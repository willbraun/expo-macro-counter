import { View } from "react-native";
import { useNavigate } from 'react-router-native';
import { Text, Button } from 'react-native-paper';
import './../styles/base.js'
import createStyles from "./../styles/base.js";


export default function Today() {
    const styles = createStyles();
    const navigate = useNavigate();
    
    return (
        <View style={styles.container}>
            <Text variant='displayMedium'>Today</Text>

            <Button mode='elevated' onPress={() => navigate('/badlink')}>
                <Text>This button has a bad link</Text>
            </Button>
            
        </View>
    )
}