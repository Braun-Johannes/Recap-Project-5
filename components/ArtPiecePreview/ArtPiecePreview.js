import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist, dimensions }) {
  const height = dimensions.height / 5;
  const width = dimensions.width / 5;
  return (
    <>
      <Image src={image} height={height} width={width} alt={title} />
      <h2>{title}</h2>

      <h4>by {artist}</h4>
      <hr />
    </>
  );
}
