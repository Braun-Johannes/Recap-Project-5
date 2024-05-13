import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Spotlight from "@/components/Spotlight/Spotlight";

async function fetcher(...args) {
  const response = await fetch(...args);
  return await response.json();
}

export default function HomePage() {
  const url = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(url, fetcher);

  function getRandomPiece(array) {
    return array[Math.floor(Math.random() * array.length)];
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

  const randomPiece = getRandomPiece(pieces);
  console.log(randomPiece);

  return (
    <>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        dimensions={randomPiece.dimensions}
      />
      <ArtPieces pieces={pieces} />
    </>
  );
}
