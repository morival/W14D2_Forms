import React from 'react';
import Comment from './Comment'

const CommentList = ({comments}) => {

    const commentArray = comments.map(comment => {
        return (
            <Comment author={comment.author} key={comment.id} >{comment.text}</Comment>
        )
    })
    return (
        <>
        <h1>I am a CommentList!</h1>
        {commentArray}
        </>
    );
}

export default CommentList;