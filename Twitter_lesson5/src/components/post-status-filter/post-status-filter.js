import React, {Component} from 'react';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'},
        ]
    }
   render() {
       const buttons = this.buttons.map(({name, label}) => {
           const {filter, onFilterSelect} = this.props;
           const active = filter === name;
           const clazz = active ? 'btn-info' : 'btn-outline-secondary'
        return (
            <button 
                key={name} 
                type="button" 
                className={`btn ${clazz}`}
                onClick={ () => onFilterSelect(name)}>{label}
            </button>
        )
       });
    return (
        <div className="btn-group">
            {/* <button type="button" className="btn btn-info">Все</button>
            <button type="button" className="btn btn-outline-secondary">Понравилось</button> */}
            {buttons}
        </div>
    )
   }
}

