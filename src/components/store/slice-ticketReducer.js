import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchId = createAsyncThunk(
    'ticket/fetchId',
    async function () {
        const res = await fetch('https://aviasales-test-api.kata.academy/search');

        const data = await res.json();
        console.log(data)
        return data;
    }
)

export const getTickets = createAsyncThunk(
    'ticket/fetchId',
    async function ({id}, { dispatch }) {
        const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);

        const tickets = await res.json();

        dispatch(addTickets(tickets))
        return tickets;

    }
)

const ticketsReducer = createSlice({
    name: "ticket",
    initialState: {
        tickets: [],
        id: null
    },
    reducers: {
        addTickets (state, action){
            state.tickets.push(action.payload)
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchId.fulfilled, (state, action) => {
            state.id = action.payload
        })
        builder.addCase(getTickets.fulfilled, (state, action) => {
            state.tickets = action.payload
        })
    },

})

export const { addTickets } = ticketsReducer.actions;

export default ticketsReducer.reducer;