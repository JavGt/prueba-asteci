import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from '@/redux/slices/cities.slice';
import tableReducer from '@/redux/slices/table.slice';
import { SLICE } from '@/constants';

export const stores = configureStore({
	reducer: {
		[SLICE.CITY]: citiesReducer,
		[SLICE.TABLE]: tableReducer,
	},
});
