import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
    itemRow(item, index) {
        return (<TodoListItem item={item} key={index}/>);
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
    items: PropTypes.array.isRequired
};

export default TodoList;
