import * as actiontypes from '../actiontypes'
const initialState = {
  users: [],
  addwithsuccess: false,
  loading: true
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.GET_USERS_SUCCESS:
      return {...state, users: action.payload, loading: false}
    case actiontypes.ADD_USERS_SUCCESS:
      return {...state, users: state.users.concat(action.payload), addwithsuccess: true}
    case actiontypes.REMOVE_USER:
      const userFilter = (user) => {
        return user.id !== action.payload.id
      }
      return {...state, users: state.users.filter(userFilter)}
    case actiontypes.HIDE_MESSAGE:
      return {...state, addwithsuccess: action.payload}
    default:
      return state
  }
}

export default users;