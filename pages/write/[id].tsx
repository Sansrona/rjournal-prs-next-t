import React from 'react'
import { NextPage } from 'next'
import { MainLayout } from '../../layouts/MainLayout';
import WriteForm from '../../components/WriteForm';
import { Api } from '../../utils/api';
import { PostItem } from '../../utils/api/types';

interface WritePageProps {
    post: PostItem
}


const WritePage: NextPage<WritePageProps> = ({ post }) => {
    return (
        <MainLayout className="main-layout-white" hideComments hideMenu>
            <WriteForm data={post} />
        </MainLayout>
    )
}

export const getServerSideProps = async ctx => {
    try {
        const post = await Api(ctx).post.getPostById(+ctx.params.id);
        const user = await Api(ctx).user.getMe();
        if (post.user.id !== user.id) {
            return {
                props: {},
                redirect: {
                    destination: '/',
                    permanent: false,
                }
            }
        }
        return {
            props: {
                post
            }
        }
    } catch (error) {
        console.log(error);
        return {
            props: {},
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
}

export default WritePage;