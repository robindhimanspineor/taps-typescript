import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";

import apolloClient from "../apolloClient";

// const Home: NextPage = () => {
//   console.log(apolloClient(),"hhh");

//   return (
//     <div>
//       {/* <Testing /> */}
//       <h1>Testing</h1>
//     </div>
//   );
// };
import styles from "../styles/Home.module.css";
import Filter from "../components/Filter";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Filter />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default IndexPage;
