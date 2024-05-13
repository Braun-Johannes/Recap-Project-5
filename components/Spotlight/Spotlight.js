import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <Image src={image} height={400} width={400} alt={artist} />
      <p>{artist}</p>
    </>
  );
}
