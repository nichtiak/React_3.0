import React, {Component} from 'react';
// import './itemList.css';
import {ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const ListGroupItemCustom = styled(ListGroupItem)`
    cursor: pointer;
`;

export default class ItemList extends Component {

    render() {
        return (
            <ul className="item-list list-group">
                <ListGroupItemCustom>
                    John Snow
                </ListGroupItemCustom>
                <ListGroupItemCustom>
                    Brandon Stark
                </ListGroupItemCustom>
                <ListGroupItemCustom>
                    Geremy
                </ListGroupItemCustom>
            </ul>
        );
    }
}