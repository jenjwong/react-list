import React from 'react';
import ListItem from './ListItem'

const List = (props) => {
  return (
     <ul>
       {props.todos.map(todo => <ListItem key={todo.id} todo={todo} />)}
    </ul>
  )
};

export default List;
