import { getAllTags } from "./TagManager"
import React, { useEffect, useState } from "react";

export const AllTags = () => {

    const [tags, setTags] = useState([])

    useEffect(() => {
        getAllTags()
            .then((tags) => {
                setTags(tags)
            })
    },
        [])
    return <>
        <div>AllTags Page</div>
        {tags.map((tag) => {
            return <div key={`tag--${tag.id}`}>{tag.label}
            </div>
        })}


    </>
}