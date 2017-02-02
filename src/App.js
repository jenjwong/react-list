import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todo/TodoForm';
import List from './components/todo/List';
import {addTodo, randomNumGenerator} from './lib/todoHelpers'

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'important thing', isComplete: false },
      { id: 2, name: 'important thing', isComplete: true },
      { id: 3, name: 'important thing', isComplete: false },
    ],
    currentTodo: '',
    errorMessage: '',
  };

  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newId = randomNumGenerator();
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false};
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (e) => {
    console.log('empty')
    e.preventDefault();
    this.setState({
      errorMessage: 'Please enter a to do item'
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React To Do</h2>
        </div>
        {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
        <div className="Todo-App">
          <TodoForm handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
            currentTodo={this.state.currentTodo}/>
            <List todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
