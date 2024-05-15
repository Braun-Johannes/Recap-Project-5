import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { Fragment } from "react";
import styled from "styled-components";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  dimensions,
  slug,
  colors,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const height = dimensions.height / 5;
  const width = dimensions.width / 5;

  const ColoredDiv = styled.div`
    width: 30x;
    height: 30px;
    margin-right: 10px;
    background-color: ${(props) => props.color};
  `;

  return (
    <>
      <Link href="../art-pieces">Back</Link>
      <h1>{title}</h1>
      <h3>By: {artist}</h3>
      <Image src={image} width={width} height={height} alt={title}></Image>
      <FavoriteButton
        isFavorite={
          artPiecesInfo?.find((artPiece) => {
            return artPiece.slug === slug;
          })?.isFavorite
        }
        onToggleFavorite={() => {
          onToggleFavorite(slug);
        }}
      />
      <p>Created in: {year}</p>
      <p>Genre: {genre}</p>
      <div>
        {colors.map((color) => (
          <ColoredDiv key={color} color={color} />
        ))}
      </div>
    </>
  );
}
