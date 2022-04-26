import { getAllPosts, searchPostTitles } from "./PostManager"
import React, { useEffect, useState } from "react";
import { Post } from "./Post";


export const AllPosts = () => {

    const [posts, setPosts] = useState([])
    const [filter, setFilterType] = useState({ type: "all", value: ""})

    useEffect(() => {
        if (filter.type === "all") {
            getAllPosts()
                .then((posts) => {
                    setPosts(posts)
                })
        } else if (filter.type === "title") {
            searchPostTitles(filter.value)
                .then(setPosts)
        } else if (filter.type = "category") {
            // run category filter fetch with value
        } else if (filter.type = "user") {
            // run user filter fetch with value
        } else if (filter.type = "tag") {
            // run tag filter fetch with value
        }
    }, [filter])

    // useEffect that updates posts, [searchButton]
    return <>
        {/* filter by title jsx */}
        <fieldset>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Title..."
                />
                <button className='button' onClick={e => {
                    e.preventDefault()
                    let filterToSet = {
                        type: "title",
                        value: e.currentTarget.previousElementSibling.value
                    }
                    setFilterType(filterToSet)
                }}>
                    <label htmlFor="searchButton">Search</label>
                </button>
            </div>
        </fieldset>
        {/* filter by category jsx */}
        {/* filter by user jsx */}
        {/* filter by tag jsx */}

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
