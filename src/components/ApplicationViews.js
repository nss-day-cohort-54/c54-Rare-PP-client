import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/Home.js"
import { AllPosts } from "./posts/AllPosts.js"

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/posts/all">
        <AllPosts />
      </Route>
      {/* 
      <Route exact path="/posts/myPosts">
        <MyPosts />
      </Route>
      <Route exact path="/posts/create">
        <CreatePost />
      </Route>
      <Route exact path="/tags">
        <TagManager />
      </Route>
      <Route exact path="/categories">
        <CategoryManager />
      </Route> */}
    </>
  )
}
