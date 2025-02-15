import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
	name: "setting",
	initialState: {
		settingDrawer: false,
	},
	reducers: {
		toggleSettingDrawer: (state, action) => {
			const payload = action.payload;
			if (payload !== true && payload !== false) {
				state.settingDrawer = !(state.settingDrawer);
			} else {
				state.settingDrawer = payload;
			}
		},
	},
	extraReducers: (builder) => { },
});

export const {
	toggleSettingDrawer,
} = settingSlice.actions;

export default settingSlice.reducer;