import {FETCH_USER_DATA} from './actions'

export const userDataReducer = (state = {}, action) => {
    if (action.type === FETCH_USER_DATA) {
        return action.payload
    }

    return state
}