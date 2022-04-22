// imports React, useEffect, useSate, useHistory, sendPost, fetchTags

// Export function to create new posts and return jsx
export const CreatePosts = () => {
    // store useHistory() in var
    // [post, updatePost] = useState({keys with blank values<not id>})
    // [tags, updateTags] = useState([])

    // useEffect to load tags and update them on page load only

    // declare savePost function that will invoke on event
    // prevent default on event

    // declare newPost variable
    // build example: 
    // {
    // name: item.name, 
    // userId: parseInt(localStorage.getItem("inventory__user")),
    // typeId: parseInt(item.typeId),
    // quantity: parseInt(item.quantity),
    // picture: item.picture,
    // };

    // return sendPost(newPost).then(()=> history.push("/posts"))

    // return a form <-- see updatePost.js form



    // invoke getAllTags from TagManager.js, and set all the tags to a variable "tags" with useState
    // map through the list of all tags, displaying a checkbox for each tag along with the name/label for each tag
    // comments for creating a post have yet to be written, but when the user selects at least one tag, attach it 
    // to the post that is getting sent to the db


    return <div>CreatePosts Page</div>
}