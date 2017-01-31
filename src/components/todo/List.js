import React from 'react';
import ListItem from './ListItem'

const List = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map(todo => <ListItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
};

List.propTypes = {
  todos: React.PropTypes.array,
}

export default List;
