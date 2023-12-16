import { createSlice } from "@reduxjs/toolkit";

const tabsReducer = createSlice({
    name: 'tabs',
    initialState: {
        tabs: 'Самый дешевый'
    },
    reducers:{
        toggleSorting (state, action) {
            return {
                tabs: action.payload
            };
        }
    }
})

export const { toggleSorting } = tabsReducer.actions

export default tabsReducer.reducer;