import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
    constructor(state) {
        super(state);
        this.itemRow = this.itemRow.bind(this);
    }

    itemRow(item, index) {
        return (<TodoListItem item={item} onDelete={this.props.onDelete} key={index}/>);
    }

    render() {
        return (
            <div>
                {this.props.items.length === 0 && <div>
                    <i>No items</i>
                </div>}

                <ul>
                    {this.props.items.map(this.itemRow)}
                </ul>
            </div>
        );
    }
}

TodoList.propTypes = {
    items: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default TodoList;
