import React from 'react';

const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text"
        placeholder="enter to do item"
        onChange={props.handleInputChange}
        value={props.currentTodo} />
    </form>
  )
};

TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired
}

export default TodoForm;
