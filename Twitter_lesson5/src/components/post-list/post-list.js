import React from 'react';

import PostListItem from '../post-list-item';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';


const AppListGroup = styled(ListGroup)`
    margin-top: 50px;
`;

const ListGroupItemCustom = styled(ListGroupItem)`
    padding: 20px 35px 10px 35px;
    margin-top: 10px;
`;



const PostLIst = ({posts, onDelete,  onToggleImportant, onToggleLiked}) => {  // onToggleImportant, onToggleLiked,

    // console.log(posts);
    const elem = posts.filter((elm) => {
        return typeof(elm) === 'object' && elm !== null;
    });

    const elements = elem.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <ListGroupItemCustom key={id} /* className='list-group-item' */>
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id, 'important')}
                    onToggleLiked={() => onToggleLiked(id, 'like')}/>
            </ListGroupItemCustom>
        )
    });

    return (
        <AppListGroup>
          {elements}
        </AppListGroup>
    )
}

export default PostLIst;