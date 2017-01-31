import React from 'react';


const TodoForm = (props) => {
  return (
    <form>
      <input type="text" placeholder="enter to do item" onChange={props.handleInputChange} value={props.currentTodo} />
    </form>
  )
};

export default TodoForm;
