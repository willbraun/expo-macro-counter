import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NativeRouter, Link, Route, Routes } from "react-router-native";
import ReactDOM from "react-dom/client";
import ReactRouter from "./src/components/ReactRouter";

export default function App() {
	return (
		<ReactRouter />
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 25,
		padding: 10,
	},
	header: {
		fontSize: 20,
	},
	nav: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	navItem: {
		flex: 1,
		alignItems: "center",
		padding: 10,
	},
	subNavItem: {
		padding: 5,
	},
	topic: {
		textAlign: "center",
		fontSize: 15,
	},
});

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Today />,
//     errorElement: <ErrorPage />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
