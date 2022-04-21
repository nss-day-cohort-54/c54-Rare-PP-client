// imports
// function that gets comments by postId
// function that deletes comments by commentId
// function that adds a comment
// Component for comment form


// export component CommentList that is a single post's comments

// From Individual Post Component
    // <CommentList postId={id} /> - displayed on a boolean
export const CommentList = ({ postId }) => {
    // declare state variable for comments array
    // const [comments, setComments] = useState([])
    
    // useEffect that pulls comments by postId
    /* 
        invoke function
        getCommentsByPostId()
            then set comments from returned data
            .then((comments) => setComments(comments))
        empty dependency array to run on page load
    */

    // any other functions?
    // deleteComment
        // takes commentId param
        // invokes fetch function deleteComment()

    // addComment
        // builds proper comment


    return <>
    
    {/* <CommentForm postId={postId} /> */}

    {/* 
        map over comments and invoke comment component
        other needed JSX tags for styling
    */}
    
    </>
}