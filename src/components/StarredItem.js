import React, {Component} from 'react';

const StarredItem = props => {
    return (
        <div>
            <ol>
                <li>{props.article}</li>
                <button>Remove</button>
            </ol>
        </div>
    )
}

export default StarredItem;