import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  console.log(pieces); //ACHTUNG
  return (
    <>
      {pieces.map((piece) => {
        return (
          <ul key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          </ul>
        );
      })}
    </>
  );
}
