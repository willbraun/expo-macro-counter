import { useState } from 'react';
import { NativeRouter, Route, Routes } from "react-router-native";
import 'react-native-url-polyfill/auto';
import { supabase } from '../../lib/supabase';
import Today from "./Today";
import ErrorPage from "./ErrorPage";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import LogMeal from './LogMeal';
import EditMeal from './EditMeal';
import AddFood from "./AddFood";
import AddRecipe from "./AddRecipe";
import SelectFood from "./SelectFood";
import SelectRecipe from "./SelectRecipe";
import History from "./History";
import HistoryDetail from "./HistoryDetail";
import MyRecipes from "./MyRecipes";
import EditRecipe from "./EditRecipe";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import MyAccount from "./MyAccount";
import ScanBarcode from "./ScanBarcode";

export default function ReactRouter() {
	supabase.auth.signOut();
	
	
	// Add whole session to store instead of just auth
	// const [auth, setAuth] = useState(false);

	// Add this to actions I think, then call here. Action stores whole session, not just auth
	// (async function checkAuth() {
	// 	const result = await supabase.auth.getSession();
	// 	console.log(result)
	// 	const auth = !!result.data.session;
	// 	setAuth(auth);
	// })();
	
	// pull in session from redux, do !!session to get auth

	const auth = false

	return (
        <NativeRouter>
			<Routes>
				{/* consider branching off of an 'auth' route, though conditional rendering '/' page might be sufficient */}
				<Route path='/'>
					<Route index element={auth ? <Today /> : <Login />} />

					<Route path='/create-account' element={<CreateAccount />} />
					<Route path='/log-meal' element={<LogMeal />} />
					<Route path='/edit-meal' element={<EditMeal />} />
					{/* Update above to use specific id */}
					<Route path='/add-food' element={<AddFood />} />
					<Route path='/scan-barcode' element={<ScanBarcode />} />
					<Route path='/add-recipe' element={<AddRecipe />} />
					<Route path='/select-food' element={<SelectFood />} />
					<Route path='/select-recipe' element={<SelectRecipe />} />
					<Route path='/history' element={<History />} />
					<Route path='/history-detail' element={<HistoryDetail />} />
					{/* Update above to use specific id */}
					<Route path='/my-recipes' element={<MyRecipes />} />
					<Route path='/edit-recipe' element={<EditRecipe />} />
					{/* Update above to use specific id */}
					<Route path='/my-account' element={<MyAccount />} />
					<Route path='/change-email' element={<ChangeEmail />} />
					<Route path='/change-password' element={<ChangePassword />} />
				</Route> 

				<Route path='/*' element={<ErrorPage />} />
			</Routes>
		</NativeRouter>
    )
}