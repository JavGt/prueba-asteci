import { SLICE } from '@/constants';
import { createSlice } from '@reduxjs/toolkit';

const table = createSlice({
	name: SLICE.TABLE,
	initialState: [],
	reducers: {
		setTable: (state, action) => {
			return [...state, ...action.payload];
		},
	},
});

export const { setTable } = table.actions;

export default table.reducer;
