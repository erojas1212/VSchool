import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'

export default function CommentForm({ issueId }) {
    const { postNewComment } = useContext(UserContext)
    const [comment, setComment] = useState("");

    const handleCommentSubmit = () => {
        postNewComment(comment, issueId);
        setComment("");
    }

    return (
        <div>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={handleCommentSubmit}>Add Comment</button>
        </div>
    )
}
