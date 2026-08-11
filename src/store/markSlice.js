import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("bookmark")) || [];

export const markSlice = createSlice({
  name: "markSlice",
  initialState,
  reducers: {
    toggleClip: (state, action) => {
      const clipIndex = state.findIndex(
        (item) => +item.id === +action.payload.id,
      );

      if (clipIndex === -1) {
        state.push(action.payload);
      } else {
        state.splice(clipIndex, 1);
      }
    },
  },
});

export const { toggleClip } = markSlice.actions;
export default markSlice.reducer;
