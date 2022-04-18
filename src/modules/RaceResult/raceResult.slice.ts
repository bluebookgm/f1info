import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface RaceState {
    currentRace: any;
    status: string;
    error: null | string;
}

const initialState: RaceState = {
    currentRace: {},
    status: 'idle',
    error: null
};

const currentRaceResultsSlice = createSlice({
    name: 'currentRace',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCurrentRace.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCurrentRace.fulfilled, (state, action) => {
                state.status = 'success'
                state.currentRace = action.payload
            })
            .addCase(fetchCurrentRace.rejected, (state, action) => {
                state.status = 'error'
            })
        }
    }
);

export const fetchCurrentRace = createAsyncThunk('currentRace/fetchRace', async () => {
    const response = await fetch("https://ergast.com/api/f1/current/last/results.json");
    return response.json();
})

export default currentRaceResultsSlice.reducer;