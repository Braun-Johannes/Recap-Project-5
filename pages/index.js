import Spotlight from "@/components/Spotlight/Spotlight";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function SpotLightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
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
      <FavoriteButton
        isFavorite={
          artPiecesInfo?.find((artPiece) => {
            return artPiece.slug === randomPiece.slug;
          })?.isFavorite
        }
        onToggleFavorite={() => {
          onToggleFavorite(randomPiece.slug);
        }}
      />
    </>
  );
}
