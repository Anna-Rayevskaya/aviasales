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
            if(response.status < 500){
                throw new Error('Failed to receive tickets!');
            }
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
        id: null,
        stop: null,
        rec: false,
    },
    reducers: {
        sortedTickets(state, action) {
          if (action.payload === "Самый дешевый") {
            const sortedTickets = [...state.tickets].sort((a, b) => {
              return b.price - a.price;
            });
            return {
              ...state,
              tickets: sortedTickets
            };
          } else {
            return state;
          }
        }
      },
    extraReducers: (builder) => {
        builder
          .addCase(fetchId.fulfilled, (state, action) => {
            state.id = action.payload.searchId;
            state.stop = false;
          })
          .addCase(fetchId.rejected, (state, action) => {
            console.log('rejected fetchId', action);
          })
          .addCase(fetchTicket.fulfilled, (state, action) => {
            state.tickets.push(...action.payload.tickets);
            state.stop = action.payload.stop;
            state.tickets.sort((a, b) => a.price - b.price);
            if(!action.payload.stop){
                state.rec = !state.rec
            }

          })
          .addCase(fetchTicket.rejected, (state, action) => {
            console.log('rejected fetchTicket', action);
            state.rec = !state.rec
          });
      },
})

export const { sortedTickets } = ticketsReducer.actions
export default ticketsReducer.reducer;