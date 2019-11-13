import React, {Component} from 'react';
import styled from 'styled-components';

const AddForm = styled.form`    
    margin-top: 20px;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
      }
`

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e){
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        // this.state.text.trim();
        if (this.state.text.trim() !== '') {
            this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
        }
        
    }

    render() {
        return (
            <AddForm 
                className="d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Очём вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    >
                        Добавить
                    </button>
            </AddForm>
        )
    }
}
