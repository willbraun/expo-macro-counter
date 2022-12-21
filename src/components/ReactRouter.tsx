import { useState } from 'react';
import { NativeRouter, Route, Routes } from "react-router-native";
import 'react-native-url-polyfill/auto';
import { supabase } from '../../lib/supabase';
import Today from "../routes/Today";
import ErrorPage from "../routes/ErrorPage";
import Login from "../routes/Login";
import CreateAccount from "../routes/CreateAccount";
import LogMeal from '../routes/LogMeal';
import EditMeal from '../routes/EditMeal';
import AddFood from "../routes/AddFood";
import AddRecipe from "../routes/AddRecipe";
import SelectFood from "../routes/SelectFood";
import SelectRecipe from "../routes/SelectRecipe";
import History from "../routes/History";
import HistoryDetail from "../routes/HistoryDetail";
import MyRecipes from "../routes/MyRecipes";
import EditRecipe from "../routes/EditRecipe";
import ChangeEmail from "../routes/ChangeEmail";
import ChangePassword from "../routes/ChangePassword";
import MyAccount from "../routes/MyAccount";
import ScanBarcode from "../routes/ScanBarcode";

export default function ReactRouter() {
	// supabase.auth.signOut();
	
	// Add whole session to store instead of just auth
	const [auth, setAuth] = useState(false);

	// Add this to actions I think, then call here. Action stores whole session, not just auth
	(async function checkAuth() {
		const result = await supabase.auth.getSession();
		const auth = !!result.data.session;
		setAuth(auth);
	})();
	
	// pull in session from redux, do !!session to get auth

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