import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import baseApi from './api/baseApi';
import settingReducer from "./reducers/setting";

export const store = configureStore({
	reducer: {
		setting: settingReducer,
		[baseApi.reducerPath]: baseApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);