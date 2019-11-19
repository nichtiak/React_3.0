import React, {Component} from 'react';
// import './itemList.css';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const ListGroupItemCustom = styled(ListGroupItem)`
    cursor: pointer;
`;
const ListGroupCustom = styled(ListGroup)`
    cursor: pointer;
`;

export default class ItemList extends Component {

    render() {
        return (
            <ListGroupCustom>
                <ListGroupItemCustom>
                    John Snow
                </ListGroupItemCustom>
                <ListGroupItemCustom>
                    Brandon Stark
                </ListGroupItemCustom>
                <ListGroupItemCustom>
                    Geremy
                </ListGroupItemCustom>
            </ListGroupCustom>
        );
    }
}