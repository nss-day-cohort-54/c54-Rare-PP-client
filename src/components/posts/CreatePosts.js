// imports React, useEffect, useSate, useHistory, sendPost, fetchTags
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchIt } from "../utils/Fetch"
import { Settings } from "../utils/Settings"
import { getAllTags } from "../tags/TagManager";
import { getAllPosts } from "./PostManager";
import { getAllCategories } from "../categories/CategoryManager";
// // Export function to create new posts and return jsx
// export const CreatePosts = () => {
//     // store useHistory() in var
//     const history = useHistory()
//     // [post, updatePost] = useState({keys with blank values<not id>})
//     const [post, updatePost] = useState({name: "", userId: "", typeId: "", quantity: "", picture: "",})
//     [tags, updateTags] = useState([])

//     // useEffect to load tags and update them on page load only

//     // declare savePost function that will invoke on event
//     // prevent default on event

//     // declare newPost variable
//     // build example: 
//     // {
//     // name: item.name, 
//     // userId: parseInt(localStorage.getItem("inventory__user")),
//     // typeId: parseInt(item.typeId),
//     // quantity: parseInt(item.quantity),
//     // picture: item.picture,
//     // };

//     // return sendPost(newPost).then(()=> history.push("/posts"))

//     // return a form <-- see updatePost.js form



//     // invoke getAllTags from TagManager.js, and set all the tags to a variable "tags" with useState
//     // map through the list of all tags, displaying a checkbox for each tag along with the name/label for each tag
//     // comments for creating a post have yet to be written, but when the user selects at least one tag, attach it 
//     // to the post that is getting sent to the db


//     return <div>CreatePosts Page</div>
// }



// const [posts, setPosts] = useState([])

// useEffect(() => {
//     getAllPosts()
//         .then((posts) => {
//             setPosts(posts)
//         })
// },
//     [])
// return <>
//     <div>AllPosts Page</div>
//     {posts.map((post) => {
//         return <div key={`post--${post.id}`}>{post.title} {post.user.first_name} {post.category.label} {post.publication_date} {post.content}
//         </div>
//         // needs author name and category, publication date, content 
//     })}





export const CreatePosts = ({ getPosts }) => {
    const [form, updateForm] = useState({ label: "" })
    const [categories, setCategories] = useState([])
    const history = useHistory()

useEffect(() => {
    getAllCategories()
        .then((categories) => {
            setCategories(categories)
        })
},
    [])

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
            tags: []
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



            <div className="submitButtonCreateNewPostForm">
                <button onClick={(e) => {
                    submitPost(e)
                    updateForm({ title: "", imageUrl: "", content: "", categoryId: "0"})
                }} className="submit-button">
                    Submit
                </button>
            </div>
        </>
    )
}






















// import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { fetchIt } from "../utils/Fetch"
// import { Settings } from "../utils/Settings"
// import { getAllTags } from "./TagManager";
// export const NewTagForm = ({ getTags }) => {
//     const [form, updateForm] = useState({label: ""})
//     const history = useHistory()
//     const submitTag = (e) => {
//         e.preventDefault()
//         const newTag = {
//             label: form.label,
//         }
//         return fetchIt(`${Settings.API}/tags`, "POST", JSON.stringify(newTag))
//                 .then(getTags)
//     }
//     return (
//         <>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="tag">Create a new tag</label>
//                     <input
//                         required autoFocus
//                         type="text" id="tag"
//                         className="form-control"
//                         placeholder="add text"
//                         value={form.label}
//                         onChange={
//                             (e) => {
//                                 const copy = { ...form }
//                                 copy.label = e.target.value
//                                 updateForm(copy)
//                             }
//                         }
//                     />
//                     <div className="submitButtonCreateNewTagForm">
//                         <button onClick={(e) => {
//                             submitTag(e)
//                             updateForm({label: ""})
//                         }} className="submit-button">
//                             Submit
//                         </button>
//                     </div>
//                 </div>
//             </fieldset>
//         </>
//     )
// }