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
    }

    onItemNameChange(event) {
        const item = this.state.item;
        item.name = event.target.value;
        this.setState({item});
    }

    onAddItem(item) {
        this.props.createItem(item);
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <TodoAddForm onAddItem={this.onAddItem}/>
                <TodoList items={this.props.items}/>
            </div>
        );
    }
}

TodoListPage.propTypes = {
    items: PropTypes.array.isRequired,
    createItem: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {items: state.items};
}

function mapDispatchToProps(dispatch) {
    return {
        createItem: item => dispatch(itemActions.createItem(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);
