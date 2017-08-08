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

    componentDidMount() {
        this.nameInput.focus();
    }

    onItemNameChange(event) {
        const item = this.state.item;
        item.name = event.target.value;
        this.setState({item});
    }

    onAddItem(event) {
        event.preventDefault();
        this.props.onAddItem(this.state.item);
        this.setState({
            item: {
                name: ''
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.onAddItem} className='todo-add-form'>
                <input type='text' className='form-control input-lg' onChange={this.onItemNameChange} ref={(input) => { this.nameInput = input; }} value={this.state.item.name} placeholder='Add a TODO item'/>
            </form>
        );
    }
}

TodoAddForm.propTypes = {
    onAddItem: PropTypes.func.isRequired
};

export default TodoAddForm;
