import React from 'react';
import { connect } from 'react-redux';
import { removeStarred } from '../actions';

const StarredItem = props => {
    return (
        <div>
            <ol>
                <li>{props.article}</li>
                <button onClick={() => props.removeStarred(props.article)}>
                    Remove
                </button>
            </ol>
        </div>
    );
};
const mapDispatchToProps = dispatch => {
    return {
        removeStarred: article => dispatch(removeStarred(article))
    };
};

export default connect(null, mapDispatchToProps)(StarredItem);