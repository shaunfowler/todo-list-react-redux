import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({item, onDelete}) => (
    <div>
        {item.name} <button onClick={() => onDelete(item.id)}>X</button>
    </div>
);

TodoListItem.propTypes = {
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default TodoListItem;
