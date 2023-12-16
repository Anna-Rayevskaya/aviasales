import { createSlice } from "@reduxjs/toolkit";

const filterReducer = createSlice({
    name: 'filter',
    initialState: {
        filter: [],
        allChecked: false,
    },
    reducers:{
        toggleFilter (state, action) {
            if (action.payload === 'Все' || state.filter.langth === 3) {
                return {
                    ...state,
                    allChecked: true,
                    filter: ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'] 
                };
            } else {
                return {
                    ...state,
                    filter: [...state.filter, action.payload]
                };
            }
        },

        removeFilter (state, action){
            if (action.payload === 'Все') {
                return {
                    ...state,
                    allChecked: false,
                    filter: []
                };
            } else {
            return {
                ...state,
                filter: state.filter.filter(item => item !== action.payload)
              };
        }
    }
    }
})
export const { toggleFilter, removeFilter } = filterReducer.actions

export default filterReducer.reducer;