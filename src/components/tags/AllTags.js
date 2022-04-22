import { getAllTags } from "./TagManager"
import React, { useEffect, useState } from "react";
import { NewTagForm } from "./CreateTagForm";
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
        <div className="CreateNewTagFormContainer">
            <NewTagForm />
        </div>
        {tags.map((tag) => {
            return <div key={`tag--${tag.id}`}>{tag.label} 
            <button>edit</button> <button>delete</button>
            </div>
        })}


    </>
}