import * as actiontypes from '../actiontypes';

import {
  getUsers,
  getAlbums,
  getPosts,
  getPhotos,
} from '../resources/users'

export const users = () => {
  return (dispacth) => {
    getUsers().then(users => {
      getAlbums().then(albums => {
        getPosts().then(posts => {
          getPhotos().then(photos => {
            // console.log(users, posts, photos);
            users.forEach((user, i) => {
              users[i].albums = albums.filter((album)=>{
                return user.id === album.userId
              })
              users[i].posts = posts.filter((post)=>{
                return user.id === post.userId
              })
              users[i].albums.forEach((album, i) => {
                users[i].photos = photos.filter((photo) => {
                  return photo.albumId === album.id
                })
              });
            });
            dispacth({ type: actiontypes.GET_USERS_SUCCESS, payload: users })
          })
        })
      })
    })
  }
}


export const adduser = (newuser) => {
  console.log(newuser);
  return {
    type: actiontypes.ADD_USERS_SUCCESS,
    payload: newuser
  }
}

export const hidemessage = () => {
  return {
    type: actiontypes.HIDE_MESSAGE,
    payload: false
  }
}