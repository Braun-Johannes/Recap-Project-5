export default function Comments({ comments }) {
  return (
    <>
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <fieldset key={index}>
          <p>Date: {comment.date}</p>
          <p>Comment: {comment.text}</p>
        </fieldset>
      ))}
    </>
  );
}
