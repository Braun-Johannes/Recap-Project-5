import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotLightPage({ pieces }) {
  function getRandomPiece(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomPiece = getRandomPiece(pieces);

  return (
    <>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        dimensions={randomPiece.dimensions}
      />
    </>
  );
}
