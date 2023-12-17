import { createSlice } from "@reduxjs/toolkit";

const filterReducer = createSlice({
    name: 'filter',
    initialState: {
        filter: [],
    },
    reducers:{
        toggleFilter (state, action) {
                return {
                    ...state,
                    filter: [...state.filter, action.payload]
                };
        },

        removeFilter (state, action){

            return {
                ...state,
                filter: state.filter.filter(item => item !== action.payload)
              };
    }
    }
})
export const { toggleFilter, removeFilter } = filterReducer.actions

export default filterReducer.reducer;