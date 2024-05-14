import HeartIcon from "assets/Heart Icon.svg";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <>
      <button
        onClick={onToggleFavorite}
        style={{ backgroundColor: "transparent", border: "none" }}
      >
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
