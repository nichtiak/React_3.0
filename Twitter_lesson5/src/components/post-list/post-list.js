import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup} from 'reactstrap';



const PostLIst = ({posts, onDelete}) => {

    // console.log(posts);
    const elem = posts.filter((elm) => {
        return typeof(elm) === 'object' && elm !== null;
    });

    const elements = elem.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key={id} className='list-group-item'>
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}/>
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
          {elements}
        </ListGroup>
    )
}

export default PostLIst;