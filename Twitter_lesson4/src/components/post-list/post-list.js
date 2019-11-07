import React from 'react';

import PostListItem from '../post-list-item';



const PostLIst = ({posts}) => {

    // console.log(posts);
    const elem = posts.filter((elm) => {
        return typeof(elm) === 'object' && elm !== null;
    });

    const elements = elem.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...itemProps}/>
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
          {elements}
        </ul>
    )
}

export default PostLIst;