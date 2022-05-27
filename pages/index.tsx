import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import { setUserData } from '../redux/slices/user';
import { wrapper } from '../redux/store';
import { usersApi } from '../utils/api';

export default function Posts() {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ctx => {
  try {
    const { rj_token } = parseCookies(ctx);
    const userData = await usersApi.getMe(rj_token);
    store.dispatch(setUserData(userData));
    return {
      props: {}
    }
  } catch (error) {
    console.log(error);
    return {
      props:{}
    }
  }
})
