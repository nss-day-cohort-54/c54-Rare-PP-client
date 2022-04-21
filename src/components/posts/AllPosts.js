import { getAllPosts } from "./PostManager"
import React, { useEffect, useState } from "react";

export const AllPosts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts()
            .then((posts) => {
                setPosts(posts)
            })
    },
        [])
    return <>
        <div>AllPosts Page</div>
        {posts.map((post) => {
            return <div>{post.title} {post.user} {post.category} {post.publication_date} {post.content}
            </div>
            // needs author name and category, publication date, content 
        })}


    </>
}

// ADD INTO RETURN STATEMENT ABOVE
// delete button
    // onclick
        // prompts with "Are you sure you want to delete this post?" alert window
        // Alert window "Ok" button
        // Alert window "Cancel" button

// edit button
    // onclick
        // Links to "Author Edit Post" page

// add post button
    // onclick
        // Links to "Author My Posts" page

//search field