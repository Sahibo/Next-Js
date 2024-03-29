import "@/styles/globals.css";
import Layout from "@/components/Layout";
import "../styles/Layout.module.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
