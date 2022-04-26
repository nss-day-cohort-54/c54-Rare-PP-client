import { useState, useEffect } from "react"
import { getSubsForFollower } from "../users/SubManager"

export const SubbedPosts = () => {
    const [subs, setSubs] = useState([{posts: []}])
    const [posts, setPosts] = useState([])
    const currentUser = localStorage.getItem("token")

    useEffect(
        () => {
            getSubsForFollower(currentUser)
                .then(setSubs)
        },
        []
    )

    useEffect(
        () => {
            let postArray = []
            for (const sub of subs) {
                if(sub.posts) {
                    for (const post of sub.posts) {
                        postArray.push(post)
                    }
                }
            }
            setPosts(postArray)
        },
        [subs]
    )


    return <div>
        {
            posts.map(post => {
                return <div key={`post--${post.id}`}>
                    {JSON.stringify(post)}
                    </div>
            })
        }
    </div>
}