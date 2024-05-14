import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  if (!pieces) {
    return <>No data available...</>;
  }

  return (
    <div>
      <ArtPiecePreview
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}

// export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
//   if (!pieces) {
//     return <>No data available...</>;
//   }

//   return (
//     <div>
//       {pieces.map((piece) => {
//         return (
//           <ul key={piece.slug}>
//             <ArtPiecePreview
//               pieces={pieces}
//               title={piece.name}
//               artist={piece.artist}
//               dimensions={piece.dimensions}
//               isFavorite={
//                 artPiecesInfo?.find((artPiece) => {
//                   return artPiece.slug === piece.slug;
//                 })?.isFavorite
//               }
//               onToggleFavorite={() => {
//                 onToggleFavorite(piece.slug);
//               }}
//             />
//           </ul>
//         );
//       })}
//     </div>
//   );
// }
