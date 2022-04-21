const API = 'http://localhost:8088'

export const getAllPosts = () => {
  return fetch(`${API}/posts`)
    .then((res) => res.json())
}

// export function that fetches single post, needs param to take id as arg, then parse from json to js

// export function that adds post

  // for each post, return the fetch entries,

    // method is POST
    // headers

    // body will have stringified json with (post) as arg
    // then getAllPosts


// export function that deletes a single post "postId => {"
  // return a fetch with /${postId},
    // method: DELETE


// export a function that edits a post "post => {"
  // return fetch with /{post.id}
    // method: PUT
    // normal headers
    // body is stringified json with entry passed as arg

// get posts by user id

