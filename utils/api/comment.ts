import { AxiosInstance } from 'axios';
import { CommentItem, CommentTypes } from './types';


export const commentsApi = (instance: AxiosInstance) => ({
    async getAll(): Promise<CommentItem[]> {
        const { data } = await instance.get('comments');
        return data;
    },
    async create(dto: CommentTypes): Promise<CommentItem> {
        const { data } = await instance.post('comments', dto);
        return data;
    },
    async remove(id: number) {
        return await instance.delete('comments/' + id );
    }
});