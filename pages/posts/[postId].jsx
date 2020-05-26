import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout";

const Post = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <Layout>
      <Head>
        <title>{postId}</title>
      </Head>
      <h1>{postId}</h1>
    </Layout>
  );
};

export default Post;
