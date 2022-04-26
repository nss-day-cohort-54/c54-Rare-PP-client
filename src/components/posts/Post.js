import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Post.css"
// function that renders a single post
export const Post = ({ listView, cardView, post }) => {

    const currentUser = parseInt(localStorage.getItem("token"))


    return <>
        {/* Content needed in all posts list */}
        {/* Title, Author, Date, Category, Tags */}
        {
            listView && cardView
                ? <div key={`post--${post.id}`} className="postCard">
                    <div className="cardTitle">
                        <div>
                            <Link to={`/posts/single/${post.id}`}>
                                {post.title}
                            </Link>
                        </div>
                        <div>{post.publicationDate}</div>
                    </div>
                    <div className="cardImage">
                        <img src={`${post.imageUrl || "https://picsum.photos/300/100"}`} />
                    </div>
                    <div className="cardBottom">
                        <div>Author: {post.user.firstName} {post.user.lastName}</div>
                        <div className="cardFunctions">
                            <div>Reaction Count: 0</div>
                            {
                                post.userId === currentUser
                                    ? <div className="cardButtons">
                                        <div>Edit Button</div>
                                        <div>Delete Button</div>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                : listView
                    ? <div key={`post--${post.id}`} className="singlePost">
                        <div>
                            <Link to={`/posts/single/${post.id}`}>
                                {post.title}
                            </Link>
                        </div>
                        <div>{post.user.firstName} {post.user.lastName}</div>
                        <div>{post.publicationDate}</div>
                        <div>{post.category.label}</div>
                        <div>{post.tags.map(tag => <div key={`posttag${post.id}${tag.id}`}>{tag.label}</div>)}</div>
                    </div>
                    : <div key={`post--${post.id}`} className="postDetails">
                        <div className="postDetailsMain">
                            <div className="postDetailsTitle">
                                <div className="cardButtons">
                                    <div>Edit</div>
                                    <div>Delete</div>
                                </div>
                                <div>{post.title}</div>
                                <div>{post.category.label}</div>
                            </div>
                            <div><img src={`${post.imageUrl || "https://picsum.photos/300/100"}`} /></div>
                            <div className="postDetailsBelowCard">
                                <div>By <Link to={`/users/${post.userId}`} >
                                    {post.user.username}
                                </Link>
                                </div>
                                <div>View Comments</div>
                                <div>Reactions</div>
                            </div>
                            <div>{post.content}</div>
                        </div>
                        <div className="postDetailsTags">{post.tags.map(tag => <div key={`posttag${post.id}${tag.id}`}>{tag.label}</div>)}</div>
                    </div>
        }
        {/* Content needed in card view */}
        {/* Title, Image, Author Name (not username), Publication date, reaction count */}
        {/* Content needed in post details */}
        {/* Title, category, tags, content, username, image, reactions */}
    </>
}