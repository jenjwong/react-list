import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todo/TodoForm';
import List from './components/todo/List';
import Footer from './components/todo/Footer';
import {addTodo, randomNumGenerator, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/todoHelpers'
import { partial, pipe } from './lib/utils';

class App extends Component {
  state = {
    todos: [],
    currentTodo: '',
    errorMessage: '',
  };

  static contextTypes = {
    route: React.PropTypes.string
  }

  handleRemove = (id, e) => {
    e.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({todos: updatedTodos});
  }

  handleTogle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    const updatedTodos = getUpdatedTodos(id, this.state.todos);
    this.setState({todos: updatedTodos});
  }

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
    const displayTodos = filterTodos(this.state.todos, this.context.route);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React To Do</h2>
        </div>
        {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
        <div className="Todo-App">
          <TodoForm
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
            currentTodo={this.state.currentTodo}
          />
            <List
              todos={displayTodos}
              handleTogle={this.handleTogle}
              handleRemove={this.handleRemove}
            />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
