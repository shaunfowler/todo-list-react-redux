import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({item, onDelete}) => (
    <div className='list-group-item'>
        <button className='btn btn-link' onClick={() => onDelete(item.id)}>
            <i className='glyphicon glyphicon-ok'/>
        </button>
        {item.name}
    </div>
);

TodoListItem.propTypes = {
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default TodoListItem;
