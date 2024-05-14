import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function Favorites({ pieces, artPiecesInfo, onToggleFavorite }) {
  const favoritePieces = pieces.filter((piece) =>
    artPiecesInfo.some(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    )
  );

  return (
    <>
      {favoritePieces.length === 0 ? (
        <p>No favorites... Please like some pictures</p>
      ) : (
        <ArtPieces
          pieces={favoritePieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
        ></ArtPieces>
      )}
    </>
  );
}
