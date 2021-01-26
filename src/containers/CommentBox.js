import React, {useState} from "react";
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

const CommentBox = () => {
    
    const [comments, setComments] = useState(
        [
            {
              id: 1,
              author: "Rick Henry",
              text: "React is awesome!"
            },
            {
              id: 2,
              author: "John Harper",
              text: "I am dreaming in React"
            }
          ]
    );

    const addComment = (newComment) => {
      newComment.id = Date.now();
      const updateComments = [...comments, newComment];
      setComments(updateComments);
    }

    return (
        <>
            <h1>Comment</h1>
            <CommentList comments={comments} ></CommentList>
            <h2>Add a comment:</h2>
            <CommentForm onCommentSubmit={(comment) => addComment(comment)}></CommentForm>
        </>
    );
}

export default CommentBox;