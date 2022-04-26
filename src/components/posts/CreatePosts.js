// imports React, useEffect, useSate, useHistory, sendPost, fetchTags
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchIt } from "../utils/Fetch"
import { Settings } from "../utils/Settings"
import { getAllTags } from "../tags/TagManager";
import { getAllPosts } from "./PostManager";
import { getAllCategories } from "../categories/CategoryManager";



export const CreatePosts = ({ getPosts }) => {
    const [form, updateForm] = useState({ label: "" })
    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])
    const history = useHistory()

    useEffect(() => {
        getAllCategories()
            .then((categories) => {
                setCategories(categories)
            })
    },
        [])

    useEffect(() => {
        getAllTags()
            .then((tags) => {
                setTags(tags)
            })
    },
        [])

        const handleControlledInputChange = (event) => {
            /*
                When changing a state object or array, always create a new one
                and change state instead of modifying current one
            */
            const newEntry = Object.assign({}, form)
            if(event.target.name === "tags") {
                if(!(event.target.name in newEntry)){
                    newEntry[event.target.name] = []
                }
                let val = parseInt(event.target.id)
                if(event.target.checked) {
                    newEntry[event.target.name].push(val)
                } else {
                    newEntry[event.target.name] = newEntry[event.target.name].filter(tag => tag !== val)
                }
            } else {
                newEntry[event.target.name] = event.target.value
            }
            updateForm(newEntry)
        }

    const submitPost = (e) => {
        e.preventDefault()
        const newPost = {
            userId: parseInt(localStorage.getItem("token")),
            categoryId: form.categoryId,
            title: form.title,
            publicationDate: (new Date()).toISOString().split('T')[0],
            imageUrl: form.imageUrl,
            content: form.content,
            approved: 1,
            tags: form.tags
        }
        return fetchIt(`${Settings.API}/posts`, "POST", JSON.stringify(newPost))
            .then((taco) => history.push(`/posts/single/${taco.id}`))
    }
    return (
        <>
            <fieldset>
                <div className="form-group">

                    <input
                        required autoFocus
                        type="text" id="post"
                        className="form-control"
                        placeholder="Title"
                        value={form.title}
                        onChange={
                            (e) => {
                                const copy = { ...form }
                                copy.title = e.target.value
                                updateForm(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">

                    <input
                        required autoFocus
                        type="text" id="post"
                        className="form-control"
                        placeholder="Image URL"
                        value={form.imageUrl}
                        onChange={
                            (e) => {
                                const copy = { ...form }
                                copy.imageUrl = e.target.value
                                updateForm(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">

                    <input
                        required autoFocus
                        type="text" id="post"
                        className="form-control"
                        placeholder="Article Content"
                        value={form.content}
                        onChange={
                            (e) => {
                                const copy = { ...form }
                                copy.content = e.target.value
                                updateForm(copy)
                            }
                        }
                    />
                </div>
            </fieldset>



            <fieldset>
                <div className="form-group">

                    <select name="category"
                        onChange={(e) => {
                            const copy = { ...form }
                            copy.categoryId = parseInt(e.target.value)
                            updateForm(copy)
                        }}
                        defaultValue="0" value={form.categoryId}>
                        <option value="0" hidden>Category Select</option>
                        {
                            categories.map(
                                (c) => {
                                    return (
                                        <option key={`categoryId--${c.id}`} value={`${c.id}`}>
                                            {`${c.label}`}
                                        </option>
                                    )
                                }
                            )
                        }
                    </select>
                </div>
            </fieldset>



            {tags.map(tag => {
                // logic to determine whether box should be pre-checked
                // let checked_status = false
                // if("tags" in updatedEntry) {
                //     if(updatedEntry.tags.length > 0) {
                //         let found_tag = updatedEntry.tags.find(t => t === tag.id)
                //         if(found_tag){
                //             checked_status = true
                //         } else {
                //             checked_status = false
                //         }
                //     } else {
                //         checked_status = false
                //     }
                // }
                return <div key={`formTags-${tag.id}`} className="checkbox">
                    <input name="tags"
                        type="checkbox"
                        htmlFor="tag"
                        id={tag.id}
                        onChange={handleControlledInputChange}
                        // checked={checked_status}
                    />
                    <label htmlFor={tag.id}>{tag.label}</label>
                </div>
            })
            }


            <div className="submitButtonCreateNewPostForm">
                <button onClick={(e) => {
                    submitPost(e)
                    updateForm({ title: "", imageUrl: "", content: "", categoryId: "0" })
                }} className="submit-button">
                    Submit
                </button>
            </div>
        </>
    )
}
