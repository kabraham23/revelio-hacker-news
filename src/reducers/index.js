const initialState = {
    articles: []
};

const starredReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_STARRED_ARTICLE":
            return {
                ...state,
                articles: [...state.articles, action.payload]
            };
            case "REMOVE_STARRED_ARTICLE":
                return {
                    articles: [...state.articles.filter(article => article !== action.payload)]
                };
            default:
                return state;
    }
};

export default starredReducer;