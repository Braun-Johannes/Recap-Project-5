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
    return;
  }

  const randomPiece = getRandomPiece(pieces);

  return (
    <>
      <Spotlight image={randomPiece.imageSource} artist={randomPiece.artist} />
      <ArtPieces pieces={pieces} />
    </>
  );
}
