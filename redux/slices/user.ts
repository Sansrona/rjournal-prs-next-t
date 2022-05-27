import { ResponseUserTypes } from './../../utils/api/types';
import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';

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
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {            
            return {
                ...state,
                ...action.payload.user
            }
        }
    }
}
)

export const {setUserData} = userSlice.actions;
export const selectUserData = (state: AppState) => state.user.data;

export const UserReducer = userSlice.reducer;