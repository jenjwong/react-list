import React from 'react';
import ListItem from './ListItem';

const List = ({ id, todos, handleTogle }) => {
  return (
    <div>
      <ul>
        {todos.map(todo => <ListItem key={todo.id} todo={todo} handleTogle={handleTogle} />)}
      </ul>
    </div>
  );
};

List.propTypes = {
  todos: React.PropTypes.array,
};

export default List;
