import React from 'react';

const ListItem = (props) => {
  return <li key={props.todo.id}><input type="checkbox" checked={props.todo.isComplete} />{props.todo.name}</li>
}

export default ListItem;
