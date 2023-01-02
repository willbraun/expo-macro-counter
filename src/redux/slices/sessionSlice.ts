import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { supabase } from "../../../lib/supabase";
import { Session } from "@supabase/supabase-js";

async function checkSession() {
	return await supabase.auth.getSession();
}

type SessionResponse = Awaited<ReturnType<typeof checkSession>>;
export type SessionResponseSuccess = SessionResponse["data"];
export type SessionResponseError = SessionResponse["error"];

type nullableSession = Session | null;

// const result = checkSession();
// console.log(result);

const initialState: nullableSession = null;

export const sessionSlice = createSlice({
	name: "session",
	initialState,
	reducers: {
		setSessionState: (
			state: nullableSession,
			action: PayloadAction<SessionResponseSuccess>
		) => {
			console.log(current(state))
			state = action.payload.session;
			console.log(current(state))
		},
	},
});

export const { setSessionState } = sessionSlice.actions;
export const selectSession = (state: RootState) => state

export default sessionSlice.reducer