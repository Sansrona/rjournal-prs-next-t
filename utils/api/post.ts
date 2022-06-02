import { AxiosInstance } from 'axios';
import { PostItem, PostTypes } from './types';


export const postsApi = (instance: AxiosInstance) => ({
    async getAll(): Promise<PostItem[]>{
        const { data } = await instance.get('posts');
        return data;
    },
    async getPostById(id: number): Promise<PostItem>{
        const { data } = await instance.get(`posts/${id}`);
        return data;
    },
    async create(dto: PostTypes) {
        const {data} = await instance.post('posts', dto);
        return data;
    }
});