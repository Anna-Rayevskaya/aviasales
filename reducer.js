// const initialState = 0
// const reducer = (state = 0, action) =>{
//     switch (action.type) {
//         case 'inc':
//             return 'inc'

//         default:
//             return state
//     }
// }

// let state= reducer(initialState, {type: 'inc'})
import { configureStore } from '@reduxjs/toolkit';

const reducer = (state= 0, action) =>{
    switch (action.type) {
        case 'inc':
            return 'inc'

        default:
            return state
    }
}

const store = configureStore({
    reducer: reducer,
  });
console.log(store.getState())