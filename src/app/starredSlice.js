import { createSlice } from '@reduxjs/toolkit'

export const starredSlice = createSlice({
  name: 'starred',
  initialState: {
    value: []
  },
  reducers: {
    addStarred: (state, action) => {
        state.value = [...state.value, action.payload]
    },
    removeStarred: (state, action) => {
        state.value = [...state.value.filter((value) => value.id !== action.payload), 1];
    }
  }
})

// Action creators are generated for each case reducer function
export const { addStarred, removeStarred } = starredSlice.actions

export default starredSlice.reducer