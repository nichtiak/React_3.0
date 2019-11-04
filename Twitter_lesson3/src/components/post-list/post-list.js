import React from 'react';

import PostListItem from '../post-list-item';

const PostLIst = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </ul>
    )
}

export default PostLIst;