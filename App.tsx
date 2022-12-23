import React from 'react';
import ReactRouter from './src/components/ReactRouter';
// import { Provider as ReduxProvider } from 'react-redux';
// import store from './src/app/store';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './src/styles/theme';

export default function App() {
	return (
		// <ReduxProvider store={store}>
			<PaperProvider theme={theme}>
				<ReactRouter />
			</PaperProvider>
		// </ReduxProvider>
	);
}