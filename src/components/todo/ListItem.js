import React from 'react';

const ListItem = (props) => {
  return <li key={props.todo.id}><input type="checkbox" checked={props.todo.isComplete} />{props.todo.name}</li>
}

ListItem.propTypes = {
  todo: React.PropTypes.object,
}

export default ListItem;
