import { useState } from "react";

export default function CommentForm({ onSubmitComment }) {
  const [commentText, setCommentText] = useState();

  function handleInputChange(event) {
    setCommentText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitComment(commentText);
    setCommentText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create your own Comment</legend>
        <label htmlFor="comment">Comment : </label>
        <textarea
          name="comment"
          id="comment"
          maxLength={300}
          required
          placeholder="Enter your comment here..."
          value={commentText}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </fieldset>
    </form>
  );
}
