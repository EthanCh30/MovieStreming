import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {getSession, signOut} from "next-auth/react"
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}


export default function Home() {
  const {data:user } = useCurrentUser();
  return (
    <>
    <h1 className="text-2xl text-green-500">Netflix Clone</h1>
    <p className="text-white">Logged in as : {user?.email}</p>
    <button className="h-10 w-full bg-white" onClick={() => signOut()}>Logout!</button>
    </>
  );
}
