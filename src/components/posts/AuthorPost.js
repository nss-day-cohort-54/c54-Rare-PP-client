// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { createPost, getPosts } from "./PostManager"
// import { getCategories } from "../categories/CategoriesManager";
// import "./Post.css"


// export const PostForm = () => {
//     const [categories, setCategories] = useState([])
//     const [posts, setPosts] = useState([])
//     const [post, setPost] = useState({
//         title: "",
//         content: "",
//         userId: localStorage.getItem("token"),
//         categoryId: "",
//         publicationDate: Date(Date.now()).toLocaleString('en-us').split('GMT')[0],
//         imageUrl: "",
//         approved: ""
//     })
//     const history = useHistory()

//     useEffect(
//         () => {
//             getCategories()
//                 .then(data => setCategories(data))
//         }, []
//     )

//     useEffect(
//         () => {
//             getPosts()
//                 .then(data => setPosts(data))
//         }, []
//     )


//     const changePostState = (event) => {
//         const newPost = Object.assign({}, post)
//         newPost[event.target.name] = event.target.value
//         setPost(newPost)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const lastIndex = posts.length - 1
//         const lastPostId = posts[lastIndex].id + 1
//         const newPost = {
//             userId: parseInt(post.userId),
//             categoryId: parseInt(post.categoryId),
//             title: post.title,
//             publicationDate: post.publicationDate,
//             imageUrl: "",
//             content: post.content,
//             approved: ""
//         }

//         createPost(newPost)
//             .then(getPosts)
//             .then(() => history.push(`/posts/${lastPostId}`))
//     }


//     return (
//         <section className="post_form_container">
//             <form className="post_form" >
//                 <h1 className="formTitle">New Post</h1>
//                 <div className="title_field">
//                     <div className="title_control">
//                         <input className="post_title" type="text" name="title" placeholder="Title" value={post.title} onChange={changePostState} />
//                     </div>
//                 </div>
//                 <div className="field">
//                     <div className="control">
//                         <textarea className="post_content" type="text" name="content" placeholder="Article content" value={post.content} onChange={changePostState} />
//                     </div>
//                 </div>
//                 <div className="dropdown_container">
//                     <div className="control">
//                     <select className="category_dropdown"
//                         name="categoryId"
//                         value={post.categoryId}
//                         onChange={changePostState}>
//                             <option name="categoryId" value="" >Select a category</option>
//                         {
//                             categories?.map((category, index) => {
//                                 return <option key={index} name="categoryId" value={category.id}>{category.label}</option>
//                             })
//                         }
//                     </select>
//                     </div>
//                 </div>
//                 <div className="publishForm_button">
//                     <div className="control">
//                         <button className="publish_button" type="submit" onClick={handleSubmit}>Publish</button>
//                     </div>
//                 </div>
//             </form>
//         </section>
//     )
// }