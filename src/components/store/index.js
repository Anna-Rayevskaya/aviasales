import { configureStore } from '@reduxjs/toolkit';
import tabsReducer from './slice-tabsReducer'
import filterReducer from './sliсe-filterReducer'

export default configureStore({
    reducer:{
        tabs: tabsReducer,
        filter: filterReducer,
    }
})