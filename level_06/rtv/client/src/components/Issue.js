import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";
import CommentForm from "./CommentForm";

export default function Issue(props) {
  const {
    title,
    description,
    _id,
    votedIssueIds = [],
    comments,
    likedUsers,
    dislikedUser,
  } = props;
  const { upvoteIssue, downvoteIssue, getComments,  setComments } =
    useContext(UserContext);


  useEffect(() => {
    getComments(_id);
  }, []);

  const handleCommentSubmit = (comment) => {
    setComments((prevComments) => [...prevComments, { text: comment }]);
  };

  const commentsText = comments.map(comment => comment.text)

  return (
    <div className="issue">
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="voting-section">
        <button
          onClick={() => upvoteIssue(_id)}
          disabled={votedIssueIds.includes(_id)}
        >
          Up Vote
        </button>
        <span>Votes: {likedUsers.length}</span>
        <button onClick={() => downvoteIssue(_id)}>Down Vote</button>
        <span>Votes: {dislikedUser.length}</span>
      </div>
      <div className="comments-section">
        <h3>Comments</h3>
        <div>{commentsText}</div>
        <CommentForm
          issueId={_id}
          onCommentSubmit={handleCommentSubmit}
          comments={comments}
        />
      </div>
    </div>
  );
}
