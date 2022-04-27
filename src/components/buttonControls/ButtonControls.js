import { Settings } from "../utils/Settings"
import { deleteComment } from "../comments/CommentManager"
import { deletePost } from "../posts/PostManager"

export const ButtonControls = ({ isPost, postId, commentId, getComments }) => {


  return <div>
    <dialog id="anything">
      <div>Are you sure you want to delete this post?</div>
      <div>
        <button
          onClick={
            () => {
              if (isPost) {
                deletePost(postId)
                  .then(
                    () => {
                      history.push("/")
                    })
              } else {
                deleteComment(commentId)
                  .then(
                    () => {
                      getComments(postId)
                    }
                  )
                  .then(
                    () => {
                      const buttonTarget = document.querySelector("#anything")
                      buttonTarget.close()
                    }
                  )
              }
            }
          }
        >Okay</button>
        <button
          onClick={
            () => {
              const buttonTarget = document.querySelector("#anything")
              buttonTarget.close()
            }
          }
        >Cancel
        </button>
      </div>

    </dialog>
    <button onClick={() => history.push(`/editPost/${postId}`)}>
      <img className="editIcon" src={`${Settings.EditIcon}`} width="50px" height="50px" />
    </button>
    <button onClick={() => {
      const buttonTarget = document.querySelector("#anything")
      buttonTarget.showModal()
    }}>
      <img className="deleteIcon" src={`${Settings.DeleteIcon}`} width="50px" height="50px" />
    </button>
  </div >
}

