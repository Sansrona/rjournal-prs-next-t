import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { UserReducer } from './slices/user';

export function makeStore() {
    return configureStore({
        reducer: {
            user: UserReducer
        },
    })
}

export const store = makeStore();

export type AppState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>