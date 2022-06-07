import { AxiosInstance } from 'axios';
import { PostItem, PostTypes, SearchDTO } from './types';


export const postsApi = (instance: AxiosInstance) => ({
    async getAll(): Promise<PostItem[]> {
        const { data } = await instance.get('posts');
        return data;
    },
    async search(query: SearchDTO): Promise<{items: PostItem[]}> {
        const { data } = await instance.get('posts/search', {params: query});
        return data;
    },
    async getPostById(id: number): Promise<PostItem> {
        const { data } = await instance.get(`posts/${id}`);
        return data;
    },
    async create(dto: PostTypes) {
        const { data } = await instance.post('posts', dto);
        return data;
    },
    async update(id: number, dto: PostTypes) {
        const { data } = await instance.patch(`posts/${id}`, dto);
        return data;
    }
});