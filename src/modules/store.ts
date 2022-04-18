import { configureStore } from "@reduxjs/toolkit";
import currentRaceResultsReducer from './RaceResult/raceResult.slice'

export const store = configureStore({
    reducer: {
        currentRace: currentRaceResultsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch