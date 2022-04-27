import { getAllPosts, searchPostCategories, searchPostTitles } from "./PostManager"
import { getUserPosts } from "./PostManager"
import React, { useEffect, useState } from "react";
import { Post } from "./Post";
import { getAllUsers } from "../users/UserManager"


export const AllPosts = () => {

    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [filter, setFilterType] = useState({ type: "all", value: "" })


    useEffect(
        () => {
            getAllUsers()
                .then(setUsers)
        },
        []
    )

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
           searchPostCategories(filter.value)
                .then(setPosts)
        } 
          // run category filter fetch with value
          else if (filter.type === "user") {
            getUserPosts(filter.value)
                .then(setPosts)
            // run user filter fetch with value
        } else if (filter.type === "tag") {
            // run tag filter fetch with value
        }
    }, [filter])

    // useEffect that updates posts, [searchButton]
    return <>
        {/* filter by title jsx */}
        <fieldset>
            <div className="titleSearch">
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

        <fieldset>
            <select
                className="categoryDropdown"
                name="categoryId"
                value={filter.type === "category" ? filter.value : "0"}
                onChange={e => {
                    e.preventDefault()
                    let copy = { ...filter }
                    copy.type = "category"
                    copy.value = e.target.value
                    setFilterType(copy)
                }}
            >
                <option name="categoryId" hidden value="0">
                    Category...
                </option>
                
            </select>
        </fieldset>
        
        
        {/* filter by user jsx */}
        <fieldset>
            <select
                className="authorDropdown"
                name="authorId"
                value={filter.type === "user" ? filter.value : "0"}
                onChange={e => {
                    e.preventDefault()
                    let copy = { ...filter }
                    copy.type = "user"
                    copy.value = e.target.value
                    setFilterType(copy)
                }}
            >
                <option name="authorId" hidden value="0">
                    Author...
                </option>
                {users?.map((user, index) => {
                    return (
                        <option key={index} name="AuthorId" value={user.id}>
                            {user.username}
                        </option>
                    );
                })}
            </select>
        </fieldset>
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
