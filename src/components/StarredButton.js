import React, {Component} from 'react';
import { useDispatch } from 'react-redux';
import { addStarred } from '../app/starredSlice';
import { Icon } from '@iconify/react';

export default function StarredButton(props) {
    const dispatch = useDispatch()
    return (
        <div>
            <button className='starred-button' onClick={() => dispatch(addStarred(props.currentArticle))}>{<Icon icon="ic:twotone-star-outline" />}save</button>
        </div>
    );
}