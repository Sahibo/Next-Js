import { inter } from "@/fonts/fonts";
import Head from "next/head";

export default function Account() {
  return (
    <div>
      <Head>
        <title>Account</title>
      </Head>
      <h1 className={inter.className}>Account Page</h1>
    </div>
  );
}
