import { combineReducers } from 'redux';

const starredReducer = (state = [], action) => {
    if (action.type === 'ADD_STARRED_ARTICLE') {
        return state.concat(action.payload);
    }
    return state;
}

export default combineReducers({
    starred: starredReducer,
})