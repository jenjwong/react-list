import React from 'react';
import { partial } from '../../lib/utils';

const ListItem = (props) => {
  const handleTogle = partial(props.handleTogle, props.todo.id);
  const handleRemove = partial(props.handleRemove, props.todo.id);
  return (
    <li>
      <span className="delete-item"><a href="#" onClick={handleRemove}>XXXXXX</a></span>
      <input
        type="checkbox"
        checked={props.todo.isComplete}
        onChange={handleTogle}
      />{props.todo.name}
    </li>
  );
};

ListItem.propTypes = {
  todo: React.PropTypes.object,
  handleTogle: React.PropTypes.func,
};

export default ListItem;
