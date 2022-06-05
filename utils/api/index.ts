import axios from "axios";
import { GetServerSidePropsContext, NextPageContext } from "next"
import Cookies, { parseCookies } from "nookies";
import { commentsApi } from "./comment";
import { postsApi } from "./post";
import { usersApi } from "./user";

export type ApiReturnType = {
    user: ReturnType<typeof usersApi>
    post: ReturnType<typeof postsApi>
    comment: ReturnType<typeof commentsApi>
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
    const cookies = ctx ? Cookies.get(ctx) : parseCookies();

    const token = cookies['rj_token'];
    const instance = axios.create({
        baseURL: "http://localhost:7777/",
        headers: {
            Authorization: 'Bearer ' + token,
        }
    })
    const apis = {
        user: usersApi,
        post: postsApi,
        comment: commentsApi,
    }

    const result = Object.entries(apis).reduce((prev, [key, f]) => {
        return {...prev,
        [key]: f(instance),
    }
    }, {} as ApiReturnType)
    return result;
}  