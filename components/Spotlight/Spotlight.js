import Image from "next/image";

export default function Spotlight({ image, artist, dimensions }) {
  const height = dimensions.height / 5;
  const width = dimensions.width / 5;

  return (
    <>
      <Image src={image} height={height} width={width} alt={artist} />
      <p>{artist}</p>
    </>
  );
}
