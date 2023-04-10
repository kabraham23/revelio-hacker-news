import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { removeStarred } from '../app/starredSlice';
import { Icon } from '@iconify/react';

export default function Starred(props) {
    const dispatch = useDispatch()
        const starredArticles = useSelector(state => {
            return state.starred.value
        })
        return (
            <div className="starred">
                {
                    starredArticles.map((article, i) => {
                        return (
                            <div>
                                <ul>
                                    <li key={i}>
                                        <a href={article.url}>{article.title}</a>
                                    </li>
                                    
                                </ul>
                                
                            </div>
                        )
                    })
                }
                <button onClick={() => dispatch(removeStarred(props.article))}>{<Icon icon="ion:checkmark-done-sharp" />}Clear All</button>
            </div>
        );
    }
