import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/FullPost';
import React from 'react';
import { PostComments } from '../../components/PostComments';
import { Api } from '../../utils/api';
import { PostItem } from '../../utils/api/types';
import { NextPage } from 'next';

interface FullPostPageProps {
  post: PostItem
}


const FullPostPage: NextPage<FullPostPageProps> = ({ post }) => {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost title={post.title} body={post.body} />
      <PostComments postId={post.id} />
    </MainLayout>
  );
}

export const getServerSideProps = async ctx => {
  try {
    const post = await Api(ctx).post.getPostById(+ctx.params.id);

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

export default FullPostPage;

