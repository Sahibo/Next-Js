import { roboto } from "@/fonts/fonts";
import Head from "next/head";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h1 className={roboto.className}>Blog Page</h1>
    </div>
  );
}
