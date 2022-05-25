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