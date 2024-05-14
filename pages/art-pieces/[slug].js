import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";

export default function PieceDetail({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const piece = pieces.find((piece) => piece.slug === slug);
  console.log(piece);

  if (!piece) {
    return;
  }

  return (
    <>
      <ArtPieceDetails
        image={piece.imageSource}
        title={piece.name}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
        dimensions={piece.dimensions}
        slug={piece.slug}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
