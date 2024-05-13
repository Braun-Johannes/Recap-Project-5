import Image from "next/image";
import Link from "next/link";
import { uid } from "uid";

export default function ArtPiecePreview({
  pieces,
  image,
  title,
  artist,
  dimensions,
}) {
  const height = dimensions.height / 5;
  const width = dimensions.width / 5;
  return (
    <>
      {pieces.map((piece) => {
        return (
          <div key={uid()}>
            <Image
              src={piece.imageSource}
              height={height}
              width={width}
              alt={title}
            ></Image>
            <h2>{title}</h2>
            <h4>by {artist}</h4>
            <Link href={`/art-pieces/${piece.slug}`}>Details</Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

{
  /* <Image src={image} height={height} width={width} alt={title}></Image>
      <h2>{title}</h2>
      <h4>by {artist}</h4>
      <Link href={`/art-pieces/${pieces.slug}`}>Details</Link>
      <hr /> */
}
