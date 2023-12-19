import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchId = createAsyncThunk(
    'ticket/fetchId',
    async function (_, { rejectWithValue }) {
        try {
            const res = await fetch('https://aviasales-test-api.kata.academy/search');

            if (!res.ok) {
                throw new Error('Failed to receive id!');
            }

            return await res.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchTicket = createAsyncThunk(
    'ticket/fetchTicket',
    async function (id, { rejectWithValue}) {
        try {
        const response  = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
        if (!response.ok) {
            throw new Error('Failed to receive id!');
        }

        return await response.json();
    } catch (error) {
        return rejectWithValue(error.message);
    }
    }
)


const ticketsReducer = createSlice({
    name: "ticket",
    initialState: {
        tickets: [],
        id: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchId.fulfilled, (state, action) => {
            state.id = action.payload.searchId;
          })
          .addCase(fetchId.rejected, (state, action) => {
            console.log('rejected fetchId', action);
          })
          .addCase(fetchTicket.fulfilled, (state, action) => {
            state.tickets = action.payload.tickets; 
          })
          .addCase(fetchTicket.rejected, (state, action) => {
            console.log('rejected fetchTicket', action);
          });
      },
})

export default ticketsReducer.reducer;