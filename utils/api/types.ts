
export type LoginTypes = {
    email: string,
    password: string
}

export type CreateUserTypes = {
    fullname: string,
} & LoginTypes

export type ResponseUserTypes = {
    createdAt: string,
    updatedAt: string,
    fullName: string,
    email: string,
    access_token: string,
    id: number,
    commentsCount?: number;
}

export type PostTypes = {
    title: string,
    body: string
}

export type PostItem = {
    id: number;
    createdAt: string;
    updatedAt: string;
    tags?: string;
    user: ResponseUserTypes,
    views?: number;
} & PostTypes;

export type CommentTypes = {
    postId: number;
    text: string;
}

export type CommentItem = {
    id: number;
    text: string;
    post: PostItem;
    user: ResponseUserTypes;
    createdAt: string;
    updatedAt: string;
}

export type SearchDTO = {
    title: string;
}