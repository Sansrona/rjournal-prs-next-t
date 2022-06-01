import { AxiosInstance } from 'axios';


export const postsApi = (instance: AxiosInstance) => ({
    async getAll() {
        const { data } = await instance.get('posts');
        return data;
    },

});