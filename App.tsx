import React from "react";
import ReactRouter from "./src/components/ReactRouter";
import { Provider as PaperProvider } from 'react-native-paper';
import theme from "./src/styles/theme";

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<ReactRouter />
		</PaperProvider>
	);
}