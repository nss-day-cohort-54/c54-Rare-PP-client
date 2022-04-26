import { getAllPosts, searchPostTitles } from "./PostManager"
import React, { useEffect, useState } from "react";
import { Post } from "./Post";


export const AllPosts = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        getAllPosts()
            .then((posts) => {
                setPosts(posts)
            })
    },
        [])

    // useEffect that updates posts, [searchButton]
    return <>
        <fieldset>
            <div className="form-group">
                <input
                    autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Title..."
                />
                <button className='button' onClick={e => {
                    e.preventDefault()
                    // debugger
                    searchPostTitles(e.currentTarget.previousElementSibling.value)
                        .then(setPosts)
                }}>
                    <label htmlFor="searchButton">Search</label>
                </button>
            </div>

        </fieldset>
        <div>AllPosts Page</div>
        <div className="singlePost">
            <div>Title</div>
            <div>Author</div>
            <div>Publication Date</div>
            <div>Category</div>
            <div>Tags</div>
        </div>
        {posts.map((post) => {
            return <Post listView={true} cardView={false} post={post} />
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
