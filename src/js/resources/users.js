const baseapi = 'https://jsonplaceholder.typicode.com';


export const getUsers = () =>{
  return fetch(`${baseapi}/users`).then(r => r.json())
}

export const getAlbums = () =>{
  return fetch(`${baseapi}/albums`).then(r => r.json())
}
export const getPosts = () =>{
  return fetch(`${baseapi}/posts`).then(r => r.json())
}
export const getPhotos = () =>{
  return fetch(`${baseapi}/photos`).then(r => r.json())
}
