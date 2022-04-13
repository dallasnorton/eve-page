import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eve Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
}
