import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  if (!pieces) {
    return <>No data available...</>;
  }

  return (
    <div>
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
    </div>
  );
}
