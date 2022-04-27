// imports
// deleteComment from CommentManager.js

import { Settings } from "../utils/Settings"
import { deleteComment } from "./CommentManager"


// export single comment component
export const Comment = ({ postId, commentObject, currentAuthor, getComments }) => {
    // currentAuthor should be boolean defined where Comment component is invoked
    // true if the current user is the comment's author
    // in JSX, delete comment button is then displayed

    // function for deleteComment
    // takes parameter of comment's id
    // calls deleteComment from CommentManager
    // refresh list
    const removeComment = (commentId) => {
        deleteComment(commentId)
            .then(() => getComments(postId))
    }

    return <div className="comment" >
        {/* 
                JSX for comment
                should have 
                    content
                    author
                deleteComment displayed if comment author is current user
            */}
        <div>{commentObject.content}</div>
        <div>{commentObject.user.username}</div>
        {
            currentAuthor
                ? <div>
                    <button onClick={() => {}}>
                        <img className="editIcon" src={`${Settings.EditIcon}`} width="50px" height="50px" />
                    </button>
                    <button onClick={() => removeComment(commentObject.id)}>
                        <img className="deleteIcon" src={`${Settings.DeleteIcon}`} width="50px" height="50px" />
                    </button>
                </div>
                : null
        }
    </div>
}