import { GetServerSideProps, NextPage } from 'next';

import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import { Api } from '../utils/api';

interface HomeProps {
  posts: any[]
}

const Posts: NextPage<HomeProps> = ({ posts }) => {
  console.log(posts);

  return (
    <MainLayout>
      <Post />
    </MainLayout>
  );
}
export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const posts = await Api().post.getAll();
    return {
      props: {
        posts
      }
    }
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      posts: null,
    }
  }
}

export default Posts;
