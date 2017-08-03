import React from 'react';
import PropTypes from 'prop-types';

class TodoAddForm extends React.Component {
    constructor(state) {
        super(state);
        this.state = {
            item: {
                name: ''
            }
        };
        this.onItemNameChange = this.onItemNameChange.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
    }

    onItemNameChange(event) {
        const item = this.state.item;
        item.name = event.target.value;
        this.setState({item});
    }

    onAddItem() {
        this.props.onAddItem(this.state.item);
        this.setState({
            item: {
                name: ''
            }
        });
    }

    render() {
        return (
            <div>
                <input type='text' onChange={this.onItemNameChange} placeholder='Item name' value={this.state.item.name}/>
                <button onClick={this.onAddItem}>Add</button>
            </div>
        );
    }
}

TodoAddForm.propTypes = {
    onAddItem: PropTypes.func.isRequired
};

export default TodoAddForm;
