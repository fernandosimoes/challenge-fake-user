import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import users from './users';

export default function configureStore(preloadedState) {
    return createStore(
        users,
        applyMiddleware(
            thunkMiddleware
        )
    )
}
// this way we can acess the store where was necessary
//  store = configureStore();