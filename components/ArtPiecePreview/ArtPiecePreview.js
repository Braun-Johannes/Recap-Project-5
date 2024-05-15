import Image from "next/image";
import Link from "next/link";
import { uid } from "uid";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      {pieces.map((piece) => {
        return (
          <div key={uid()}>
            <Image
              src={piece.imageSource}
              height={piece.dimensions.height / 5}
              width={piece.dimensions.width / 5}
              alt=""
            ></Image>
            <h2>{piece.name}</h2>
            <h4>by {piece.artist}</h4>
            <Link href={`/art-pieces/${piece.slug}`}>Details</Link>
            <FavoriteButton
              isFavorite={
                artPiecesInfo?.find((artPiece) => {
                  return artPiece.slug === piece.slug;
                })?.isFavorite
              }
              onToggleFavorite={() => {
                onToggleFavorite(piece.slug);
              }}
            />
            <hr />
          </div>
        );
      })}
    </>
  );
}
