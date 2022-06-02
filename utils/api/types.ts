
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
    views?: number;
} & PostTypes;