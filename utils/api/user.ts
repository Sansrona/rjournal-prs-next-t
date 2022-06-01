import { AxiosInstance } from 'axios';
import { CreateUserTypes, LoginTypes, ResponseUserTypes } from './types';


export const usersApi = (instance: AxiosInstance) => ({
    async register(dto: CreateUserTypes): Promise<ResponseUserTypes> {
        const { data } = await instance.post('auth/register', dto);
        return data;
    },
    async login(dto: LoginTypes): Promise<ResponseUserTypes> {
        const { data } = await instance.post('auth/login', dto);
        return data
    },
    async getMe(): Promise<ResponseUserTypes> {
        const { data } = await instance.get('users/me');        
        return data;
    }

});