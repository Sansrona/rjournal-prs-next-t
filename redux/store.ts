import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';

import { UserReducer } from './slices/user';

export function makeStore() {
    return configureStore({
        reducer: {
            user: UserReducer
        },
    })
}
export const store = makeStore();


export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export const wrapper = createWrapper<AppStore>(makeStore, {debug: true});
