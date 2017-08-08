import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as itemActions from '../actions/itemActions';
import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';

class TodoListPage extends React.Component {
    constructor(state) {
        super(state);
        this.onAddItem = this.onAddItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
    }

    onItemNameChange(event) {
        const item = this.state.item;
        item.name = event.target.value;
        this.setState({item});
    }

    onAddItem(item) {
        this.props.createItem(item);
    }

    onDeleteItem(itemId) {
        this.props.deleteItem(itemId);
    }

    render() {
        return (
            <div className='row'>
                <div className='col s8 offset-s2'>
                    <TodoAddForm onAddItem={this.onAddItem}/>
                    <TodoList items={this.props.items} onDelete={this.onDeleteItem}/>
                </div>
            </div>
        );
    }
}

TodoListPage.propTypes = {
    items: PropTypes.array.isRequired,
    createItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {items: state.items};
}

function mapDispatchToProps(dispatch) {
    return {
        createItem: item => dispatch(itemActions.createItem(item)),
        deleteItem: item => dispatch(itemActions.deleteItem(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);
