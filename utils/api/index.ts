import axios from 'axios';
import { CreateUserTypes, LoginTypes, ResponseUserTypes } from './types';

const instance = axios.create({
    baseURL: 'http://localhost:7777/'
})

export const usersApi = {
    async register(dto: CreateUserTypes): Promise<ResponseUserTypes> {
        const { data } = await instance.post('auth/register', dto);
        return data;
    },
    async login(dto: LoginTypes): Promise<ResponseUserTypes> {
        const { data } = await instance.post('auth/login', dto);
        return data
    },
    async getMe(token: string): Promise<ResponseUserTypes> {
        const { data } = await instance.get('users/me', {
            headers: { 
                'Authorization': `Bearer ${token}`
            }
        });
        return data;
    }
}