import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({item}) => (
    <div>
        {item.name}
    </div>
);

TodoListItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default TodoListItem;
