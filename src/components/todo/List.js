import React from 'react';
import ListItem from './ListItem';

const List = ({ id, todos, handleTogle, handleRemove }) => {
  return (
    <div>
      <ul>
        {todos.map(todo => <ListItem key={todo.id} todo={todo} handleTogle={handleTogle} handleRemove={handleRemove} />)}
      </ul>
    </div>
  );
};

List.propTypes = {
  todos: React.PropTypes.array,
};

export default List;
