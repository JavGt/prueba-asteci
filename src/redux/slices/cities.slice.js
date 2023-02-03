import { SLICE } from '@/constants';
import { createSlice } from '@reduxjs/toolkit';

const citiesSlice = createSlice({
	name: SLICE.CITY,
	initialState: [],
	reducers: {
		setCities: (state, action) => {
			return [...state, ...action.payload];
		},
	},
});

export const { setCities } = citiesSlice.actions;

export default citiesSlice.reducer;
