import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";

async function fetcher(...args) {
  const response = await fetch(...args);
  return await response.json();
}

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(url, fetcher);

  if (error) {
    <>Error...</>;
  }

  if (isLoading) {
    <>Is Loading...</>;
  }

  if (!pieces) {
    return <>Is loading...</>;
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Layout />
        <Component {...pageProps} pieces={pieces} />
      </SWRConfig>
    </>
  );
}
