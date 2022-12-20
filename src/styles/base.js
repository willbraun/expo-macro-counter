import { StyleSheet } from "react-native";

const baseStyles = {
	container: {
		paddingHorizontal: 20,
		paddingVertical: 40,
		width: '100%',
        height: '100%',
	},
	header: {
		marginBottom: 10
	},
	textInput: {
		marginBottom: 20
	}
};

export default function createStyles(overrides = {}) {
	return StyleSheet.create({ ...baseStyles, ...overrides });
}
