import * as actiontypes from '../actiontypes'
const initialState = {
  users: [],
  addwithsuccess: false
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.GET_USERS_SUCCESS:
      return {...state, users: action.payload}
    case actiontypes.ADD_USERS_SUCCESS:
    console.log('before', state.users)
    // console.log('after', state.users.push(action.payload))
      return {...state, users: state.users.concat(action.payload), addwithsuccess: true}
    case actiontypes.HIDE_MESSAGE:
      console.log('aqui', action)
      return {...state, addwithsuccess: action.payload}
    default:
      return state
  }
}

export default users;