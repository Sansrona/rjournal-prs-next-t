import React from 'react'
import { NextPage } from 'next'
import { MainLayout } from '../../layouts/MainLayout';
import WriteForm from '../../components/WriteForm';
import { Api } from '../../utils/api';



const WritePage: NextPage = () => {
    return (
        <MainLayout className="main-layout-white" hideComments hideMenu>
            <WriteForm />

        </MainLayout>
    )
}

export const getServerSideProps = async ctx => {
    try {
        const post = await Api().post.getPostById(ctx.params.id);
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