const API = 'http://localhost:8088'

export const getAllPosts = () => {
  return fetch(`${API}/posts`)
    .then((res) => res.json())
}


// get posts by user id