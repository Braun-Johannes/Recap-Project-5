import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function Art({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <>
      <ArtPieces
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
