import type { NextPage } from "next";
import Head from "next/head";

import styles from "@/styles/pages/Home/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Ready to start</h1>
      </main>
    </>
  );
};

export default Home;
