import React, { Component } from 'react';
import nextId from "react-id-generator";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import '../../css/app-header.css';
import '../../css/app.css';
import '../../css/index.css';
import '../../css/post-add-form.css';
import '../../css/post-list-item.css';
import '../../css/post-list.css';
import '../../css/search-panel.css';

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto
    max-width: 800px;
`

export default class App extends Component {
    htmlId = nextId();
    constructor(props) {
        super(props);
        this.state = {
            data: [545,
                { label: 'Going to learn React', important: true, id: '1' },
                { label: 'That is so good', important: false, id: '2' },
                { label: 'I need a break...', important: false, id: '3' }
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem(body) { // спросить про body - любое слово или нет??
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <AppBlock>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList posts={this.state.data}
                    onDelete={this.deleteItem} />
                <PostAddForm
                    onAdd={this.addItem} />
            </AppBlock>
        )
    }
}

