import HeartIcon from "assets/Heart Icon.svg";
import { useState } from "react";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <>
      <button onClick={onToggleFavorite}>
        {isFavorite ? (
          <HeartIcon
            style={{ fill: "red", width: "40px", height: "40px" }}
          ></HeartIcon>
        ) : (
          <HeartIcon style={{ width: "40px", height: "40px" }}></HeartIcon>
        )}
      </button>
    </>
  );
}
