import { useState, useEffect } from "react"
import { Post } from "./Post"
import { getUserPosts } from "./PostManager"

export const MyPosts = () => {
    const currentUser = localStorage.getItem("token")
    const [posts, setPosts] = useState([])

    useEffect(
        () => {
            getUserPosts(currentUser)
                .then(setPosts)
        },
        []
    )

    return <>
        {
            posts.map(post => {
                return <Post listView={true} cardView={true} post={post} />
            })
        }
    </>
}