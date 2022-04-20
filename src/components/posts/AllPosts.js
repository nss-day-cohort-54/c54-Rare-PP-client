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
            return <div>{post.title}</div>
        }

        )}
    </>
}