const addStarred = index => {
    return { type: 'ADD_STARRED_ARTICLE', payload: { index: index } }
}

const removeStarred = index => {
    return {
        type: 'REMOVE_STARRED_ARTICLE', payload: { index: index }
    }
}
export {
    addStarred,
    removeStarred,
}