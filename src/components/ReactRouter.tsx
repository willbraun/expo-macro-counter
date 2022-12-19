import { NativeRouter, Link, Route, Routes } from "react-router-native";
import Today from "../routes/Today";
import ErrorPage from "../routes/ErrorPage";

export default function ReactRouter() {
    return (
        <NativeRouter>
			<Routes>
				<Route path="/" element={<Today />} />

				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</NativeRouter>
    )
}