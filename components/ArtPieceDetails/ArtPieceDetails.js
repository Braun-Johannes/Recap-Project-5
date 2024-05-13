import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  dimensions,
}) {
  const height = dimensions.height / 5;
  const width = dimensions.width / 5;

  return (
    <>
      <h1>{title}</h1>
      <h3>By: {artist}</h3>
      <Image src={image} width={width} height={height} alt={title}></Image>
      <p>Created in: {year}</p>
      <p>Genre: {genre}</p>
      <Link href="../art-pieces">Back</Link>
    </>
  );
}
