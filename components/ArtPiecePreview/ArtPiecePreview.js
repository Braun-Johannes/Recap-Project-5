import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} height={400} width={400} alt={title} />
      <h2>{title}</h2>

      <h4>by {artist}</h4>
      <hr />
    </>
  );
}
