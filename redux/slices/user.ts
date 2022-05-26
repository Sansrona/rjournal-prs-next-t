import { ResponseUserTypes } from './../../utils/api/types';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from '../store';

export type UserSlice = {
    data: ResponseUserTypes | null;
}

const initialState: UserSlice = {
    data: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<ResponseUserTypes>) => {
            state.data = action.payload
        }
    }}
)

export const {setUserData} = userSlice.actions;
export const selectUserData = (state: AppState) => state.user.data;

export const UserReducer = userSlice.reducer;