import { useRouter } from "next/router";
import { useState } from "react";
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import CommentForm from "@/components/CommentForm/CommentForm";
import Comments from "@/components/Comments/Comments";

export default function PieceDetail({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [comments, setComments] = useState([]);

  const router = useRouter();
  const { slug } = router.query;
  const piece = pieces.find((piece) => piece.slug === slug);

  if (!piece) {
    return <>Piece not found</>;
  }

  function handleSubmitComment(commentText) {
    const newComment = {
      text: commentText,
      date: new Date().toLocaleString(),
    };
    setComments([...comments, newComment]);
  }
  // console.log(piece);

  return (
    <>
      <ArtPieceDetails
        image={piece.imageSource}
        title={piece.name}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
        dimensions={piece.dimensions}
        slug={piece.slug}
        colors={piece.colors}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
      <CommentForm onSubmitComment={handleSubmitComment} />
      <Comments comments={comments} />
    </>
  );
}
