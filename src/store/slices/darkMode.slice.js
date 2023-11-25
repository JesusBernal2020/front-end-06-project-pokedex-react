import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDark: false,
};

const darkModeSlice = createSlice({
  initialState,
  name: 'darkMode',
  reducers: {
    handleClickDarkMode: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { handleClickDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
