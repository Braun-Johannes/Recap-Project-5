import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";
import { useState } from "react";
import useLocalStorage from "use-local-storage";

async function fetcher(...args) {
  const response = await fetch(...args);
  return await response.json();
}

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(url, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorage(
    "artPiecesInfo",
    []
  );
  // pretty sure default is wrong (toggle no longer working)

  function handleIsFavorite(slug) {
    const newPiece = artPiecesInfo.find((piece) => {
      return piece.slug === slug;
    });
    if (newPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((piece) => {
          return slug === piece.slug
            ? { isFavorite: !piece.isFavorite, slug: slug }
            : piece;
        })
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { isFavorite: true, slug: slug }]);
    }
  }

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
        <Component
          {...pageProps}
          pieces={pieces}
          onToggleFavorite={handleIsFavorite}
          artPiecesInfo={artPiecesInfo}
        />
        <hr></hr>
      </SWRConfig>
      <Layout />
    </>
  );
}
